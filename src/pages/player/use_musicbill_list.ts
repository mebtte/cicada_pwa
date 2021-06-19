import { useState, useEffect, useCallback } from 'react';

import getRandomCover from '@/utils/get_random_cover';
import { RequestStatus } from '@/constants';
import getUserMusicbillListRequest from '@/apis/get_user_musicbill_list';
import getUserMusicbillDetail from '@/apis/get_user_musicbill_detail';
import addMusicToMusicbill from '@/apis/add_music_to_musicbill';
import removeMusicFromMusicbill from '@/apis/remove_music_from_musicbill';
import logger from '@/platform/logger';
import dialog from '@/platform/dialog';
import eventemitter, { EventType } from './eventemitter';
import { Music, Musicbill } from './constants';
import { transformMusic } from './utils';

export default () => {
  const [status, setStatus] = useState(RequestStatus.LOADING);
  const [musicbillList, setMusicbillList] = useState<Musicbill[]>([]);
  const getMusicbillList = useCallback(async () => {
    setStatus(RequestStatus.LOADING);
    try {
      const mbl = await getUserMusicbillListRequest();
      setMusicbillList(
        mbl.map((mb) => ({
          ...mb,
          status: RequestStatus.NOT_START,
          musicList: [],
        })),
      );
      setStatus(RequestStatus.SUCCESS);
    } catch (error) {
      logger.error(error, {
        description: '获取歌单列表失败',
        report: true,
      });
      dialog.alert({
        title: '获取歌单列表失败',
        content: error.message,
      });
      setStatus(RequestStatus.ERROR);
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
      setMusicbillList((mbl) =>
        mbl.map((mb) => {
          if (mb.id === id) {
            return {
              ...mb,
              status: RequestStatus.LOADING,
            };
          }
          return mb;
        }),
      );
      try {
        const data = await getUserMusicbillDetail(id);
        setMusicbillList((mbl) =>
          mbl.map((mb) => {
            if (mb.id === id) {
              return {
                ...mb,
                name: data.name,
                description: data.description,
                cover: data.cover || getRandomCover(),
                status: RequestStatus.SUCCESS,
                musicList: data.music_list.map((m, index) => ({
                  music: transformMusic(m),
                  index: data.music_list.length - index,
                })),
              };
            }
            return mb;
          }),
        );
      } catch (error) {
        logger.error(error, {
          report: true,
        });
        dialog.alert({
          title: '获取歌单详情失败',
          content: error.message,
        });
        setMusicbillList((mbl) =>
          mbl.map((mb) => {
            if (mb.id === id) {
              return {
                ...mb,
                status: RequestStatus.ERROR,
              };
            }
            return mb;
          }),
        );
      }
    };
    const musicbillCreatedListener = ({
      musicbill,
    }: {
      musicbill: Musicbill;
    }) =>
      setMusicbillList((mbl) =>
        [...mbl, musicbill].sort((a, b) => a.order - b.order),
      );
    const onUserMusicbillRemoved = ({ id }: { id: string }) =>
      setMusicbillList((mbl) => mbl.filter((mb) => mb.id !== id));
    const addMusicToMusicbillListener = async ({
      musicbill,
      music,
    }: {
      musicbill: Musicbill;
      music: Music;
    }) => {
      const { id: musicbillId, name: musicbillName } = musicbill;
      const { id: musicId, name: musicName } = music;
      setMusicbillList((mbl) =>
        mbl.map((mb) => {
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
      );
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
        setMusicbillList((mbl) =>
          mbl.map((mb) => {
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
        );
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
      setMusicbillList((mbl) =>
        mbl.map((mb) => {
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
      );
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
        setMusicbillList((mbl) =>
          mbl.map((mb) => {
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
        );
      }
    };
    const updateMusicbillOrderListener = (orderMap: {
      [key: string]: number;
    }) =>
      setMusicbillList((mbl) =>
        [...mbl].sort((a, b) => orderMap[a.id] - orderMap[b.id]),
      );

    eventemitter.on(EventType.FETCH_MUSICBILL, getMusicbillDetail);
    eventemitter.on(EventType.USER_MUSICBILL_UPDATED, getMusicbillDetail);
    eventemitter.on(EventType.USER_MUSICBILL_CREATED, musicbillCreatedListener);
    eventemitter.on(EventType.USER_MUSICBILL_REMOVED, onUserMusicbillRemoved);
    eventemitter.on(
      EventType.ADD_MUSIC_TO_MUSICBILL,
      addMusicToMusicbillListener,
    );
    eventemitter.on(
      EventType.REMOVE_MUSIC_FROM_MUSICBILL,
      removeMusicFromMusicbillListener,
    );
    eventemitter.on(
      EventType.UPDATE_MUSICBILL_ORDER,
      updateMusicbillOrderListener,
    );
    return () => {
      eventemitter.off(EventType.FETCH_MUSICBILL, getMusicbillDetail);
      eventemitter.off(EventType.USER_MUSICBILL_UPDATED, getMusicbillDetail);
      eventemitter.off(
        EventType.USER_MUSICBILL_CREATED,
        musicbillCreatedListener,
      );
      eventemitter.off(
        EventType.USER_MUSICBILL_REMOVED,
        onUserMusicbillRemoved,
      );
      eventemitter.off(
        EventType.ADD_MUSIC_TO_MUSICBILL,
        addMusicToMusicbillListener,
      );
      eventemitter.off(
        EventType.REMOVE_MUSIC_FROM_MUSICBILL,
        removeMusicFromMusicbillListener,
      );
      eventemitter.off(
        EventType.UPDATE_MUSICBILL_ORDER,
        updateMusicbillOrderListener,
      );
    };
  }, []);

  return {
    status,
    musicbillList,
  };
};
