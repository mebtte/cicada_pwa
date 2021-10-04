import { useState, useEffect, useCallback } from 'react';

import getRandomCover from '@/utils/get_random_cover';
import { RequestStatus } from '@/constants';
import getMusicbillListRequest from '@/server/get_musicbill_list';
import getMusicbillDetailRequest from '@/server/get_musicbill_detail';
import addMusicToMusicbill from '@/server/add_music_to_musicbill';
import removeMusicFromMusicbill from '@/server/remove_music_from_musicbill';
import logger from '@/platform/logger';
import dialog from '@/platform/dialog';
import eventemitter, { EventType } from './eventemitter';
import { Music, Musicbill } from './constants';
import { transformMusic } from './utils';

export type MusicbillList =
  | {
      loading: true;
      error: null;
      value: Musicbill[];
    }
  | {
      loading: false;
      error: Error;
      value: Musicbill[];
    }
  | {
      loading: false;
      error: null;
      value: Musicbill[];
    };

export const loadingState = {
  loading: true,
  error: null,
  value: [],
};

export default () => {
  const [musicbillList, setMusicbillList] =
    useState<MusicbillList>(loadingState);
  const getMusicbillList = useCallback(async () => {
    setMusicbillList(loadingState);
    try {
      const mbl = await getMusicbillListRequest();
      setMusicbillList({
        loading: false,
        error: null,
        value: mbl.map((mb) => ({
          id: mb.id,
          name: mb.name,
          cover: mb.cover || getRandomCover(),
          order: mb.order,
          description: mb.description,
          createTime: new Date(mb.create_time),
          musicList: [],
          public: !!mb.public,

          status: RequestStatus.NOT_START,
          error: null,
        })),
      });
    } catch (error) {
      logger.error(error, {
        description: '获取歌单列表失败',
        report: true,
      });
      setMusicbillList({
        loading: false,
        error,
        value: [],
      });
    }
  }, []);

  useEffect(() => {
    getMusicbillList();

    eventemitter.on(EventType.RELOAD_MUSICBILL_LIST, getMusicbillList);
    return () =>
      void eventemitter.off(EventType.RELOAD_MUSICBILL_LIST, getMusicbillList);
  }, [getMusicbillList]);

  useEffect(() => {
    const getMusicbillDetail = async ({ id }: { id: string }) => {
      setMusicbillList((mbl) => ({
        ...mbl,
        value: mbl.value.map((mb) => {
          if (mb.id === id) {
            return {
              ...mb,
              status: RequestStatus.LOADING,
              error: null,
            };
          }
          return mb;
        }),
      }));
      try {
        const data = await getMusicbillDetailRequest(id);
        setMusicbillList((mbl) => ({
          ...mbl,
          value: mbl.value.map((mb) => {
            if (mb.id === id) {
              return {
                ...mb,
                name: data.name,
                description: data.description,
                cover: data.cover || mb.cover || getRandomCover(),
                musicList: data.music_list.map((m, index) => ({
                  music: transformMusic(m),
                  index: data.music_list.length - index,
                })),
                public: !!data.public,

                status: RequestStatus.SUCCESS,
                error: null,
              };
            }
            return mb;
          }),
        }));
      } catch (error) {
        logger.error(error, {
          description: '获取歌单详情失败',
          report: true,
        });
        setMusicbillList((mbl) => ({
          ...mbl,
          value: mbl.value.map((mb) => {
            if (mb.id === id) {
              return {
                ...mb,
                status: RequestStatus.ERROR,
                error,
              };
            }
            return mb;
          }),
        }));
      }
    };
    const musicbillCreatedListener = ({
      musicbill,
    }: {
      musicbill: Musicbill;
    }) =>
      setMusicbillList((mbl) => ({
        ...mbl,
        value: [...mbl.value, musicbill].sort((a, b) => a.order - b.order),
      }));
    const onMusicbillRemoved = ({ id }: { id: string }) =>
      setMusicbillList((mbl) => ({
        ...mbl,
        value: mbl.value.filter((mb) => mb.id !== id),
      }));
    const addMusicToMusicbillListener = async ({
      musicbill,
      music,
    }: {
      musicbill: Musicbill;
      music: Music;
    }) => {
      const { id: musicbillId, name: musicbillName } = musicbill;
      const { id: musicId, name: musicName } = music;
      setMusicbillList((mbl) => ({
        ...mbl,
        value: mbl.value.map((mb) => {
          if (mb.id === musicbillId) {
            const musicList = [{ index: 0, music }, ...mb.musicList];
            const { length } = musicList;
            return {
              ...mb,
              musicList: musicList.map((m, index) => ({
                music: m.music,
                index: length - index,
              })),
            };
          }
          return mb;
        }),
      }));
      try {
        await addMusicToMusicbill({
          musicId,
          musicbillId,
        });
      } catch (error) {
        const description = `添加音乐"${musicName}"到歌单"${musicbillName}"失败`;
        logger.error(error, {
          description,
          report: true,
        });
        dialog.alert({
          title: description,
          content: error.message,
        });
        setMusicbillList((mbl) => ({
          ...mbl,
          value: mbl.value.map((mb) => {
            if (mb.id === musicbillId) {
              const musicList = mb.musicList.filter(
                (m) => m.music.id !== musicId,
              );
              const { length } = musicList;
              return {
                ...mb,
                musicList: musicList.map((m, index) => ({
                  ...m,
                  index: length - index,
                })),
              };
            }
            return mb;
          }),
        }));
      }
    };
    const removeMusicFromMusicbillListener = async ({
      musicbill,
      music,
    }: {
      musicbill: Musicbill;
      music: Music;
    }) => {
      const { id: musicbillId, name: musicbillName } = musicbill;
      const { id: musicId, name: musicName } = music;
      setMusicbillList((mbl) => ({
        ...mbl,
        value: mbl.value.map((mb) => {
          if (mb.id === musicbillId) {
            const musicList = mb.musicList.filter(
              (m) => m.music.id !== musicId,
            );
            const { length } = musicList;
            return {
              ...mb,
              musicList: musicList.map((m, index) => ({
                ...m,
                index: length - index,
              })),
            };
          }
          return mb;
        }),
      }));
      try {
        await removeMusicFromMusicbill({
          musicId,
          musicbillId,
        });
      } catch (error) {
        const description = `从歌单"${musicbillName}"移除音乐"${musicName}"失败`;
        logger.error(error, {
          description,
          report: true,
        });
        dialog.alert({
          title: description,
          content: error.message,
        });
        setMusicbillList((mbl) => ({
          ...mbl,
          value: mbl.value.map((mb) => {
            if (mb.id === musicbillId) {
              const musicList = [{ index: 0, music }, ...mb.musicList];
              const { length } = musicList;
              return {
                ...mb,
                musicList: musicList.map((m, index) => ({
                  music: m.music,
                  index: length - index,
                })),
              };
            }
            return mb;
          }),
        }));
      }
    };

    eventemitter.on(EventType.GET_MUSICBILL_DETAIL, getMusicbillDetail);
    eventemitter.on(EventType.MUSICBILL_UPDATED, getMusicbillDetail);
    eventemitter.on(EventType.MUSICBILL_CREATED, musicbillCreatedListener);
    eventemitter.on(EventType.MUSICBILL_DELETED, onMusicbillRemoved);
    eventemitter.on(
      EventType.ADD_MUSIC_TO_MUSICBILL,
      addMusicToMusicbillListener,
    );
    eventemitter.on(
      EventType.REMOVE_MUSIC_FROM_MUSICBILL,
      removeMusicFromMusicbillListener,
    );
    return () => {
      eventemitter.off(EventType.GET_MUSICBILL_DETAIL, getMusicbillDetail);
      eventemitter.off(EventType.MUSICBILL_UPDATED, getMusicbillDetail);
      eventemitter.off(EventType.MUSICBILL_CREATED, musicbillCreatedListener);
      eventemitter.off(EventType.MUSICBILL_DELETED, onMusicbillRemoved);
      eventemitter.off(
        EventType.ADD_MUSIC_TO_MUSICBILL,
        addMusicToMusicbillListener,
      );
      eventemitter.off(
        EventType.REMOVE_MUSIC_FROM_MUSICBILL,
        removeMusicFromMusicbillListener,
      );
    };
  }, []);

  return musicbillList;
};
