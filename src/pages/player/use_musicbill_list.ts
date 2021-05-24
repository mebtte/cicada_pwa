import { useState, useEffect, useCallback } from 'react';

import { RequestStatus } from '@/constants';
import { Music as MusicType } from '@/constants/music';
import { Musicbill, LocalMusicbill } from '@/constants/musicbill';
import getMusicbillListRequest from '@/apis/get_musicbill_list';
import getMusicbill from '@/apis/get_musicbill';
import addMusicToMusicbill from '@/apis/add_music_to_musicbill';
import removeMusicFromMusicbill from '@/apis/remove_music_from_musicbill';
import logger from '@/platform/logger';
import dialog from '@/platform/dialog';
import eventemitter, { Type as EventType } from './eventemitter';

export default () => {
  const [status, setStatus] = useState(RequestStatus.LOADING);
  const [musicbillList, setMusicbillList] = useState<LocalMusicbill[]>([]);
  const getMusicbillList = useCallback(async () => {
    setStatus(RequestStatus.LOADING);
    try {
      const mbl = await getMusicbillListRequest();
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
    const getMusicbillListener = async (musicbill: LocalMusicbill) => {
      setMusicbillList((mbl) =>
        mbl.map((mb) => {
          if (mb.id === musicbill.id) {
            return {
              ...mb,
              status: RequestStatus.LOADING,
            };
          }
          return mb;
        }),
      );
      try {
        const { musicList } = await getMusicbill(musicbill.id);
        const { length } = musicList;
        setMusicbillList((mbl) =>
          mbl.map((mb) => {
            if (mb.id === musicbill.id) {
              return {
                ...mb,
                status: RequestStatus.SUCCESS,
                musicList: musicList.map((m, index) => ({
                  music: m,
                  index: length - index,
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
        setMusicbillList((mbl) =>
          mbl.map((mb) => {
            if (mb.id === musicbill.id) {
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
    const updateMusicbillListener = ({
      id,
      change,
    }: {
      id: string;
      change: {
        [key: string]: string | number;
      };
    }) =>
      setMusicbillList((mbl) =>
        mbl.map((mb) => {
          if (mb.id === id) {
            return {
              ...mb,
              ...change,
            };
          }
          return mb;
        }),
      );
    const addMusicbillListener = (musicbill: Musicbill) =>
      setMusicbillList((mbl) => [
        ...mbl,
        {
          ...musicbill,
          status: RequestStatus.NOT_START,
        },
      ]);
    const removeMusicbillListener = (id: string) =>
      setMusicbillList((mbl) => mbl.filter((mb) => mb.id !== id));
    const addMusicToMusicbillListener = async ({
      musicbill,
      music,
    }: {
      musicbill: LocalMusicbill;
      music: MusicType;
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
      musicbill: LocalMusicbill;
      music: MusicType;
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

    eventemitter.on(EventType.FETCH_MUSICBILL, getMusicbillListener);
    eventemitter.on(EventType.UPDATE_MUSICBILL, updateMusicbillListener);
    eventemitter.on(EventType.ADD_MUSICBILL, addMusicbillListener);
    eventemitter.on(EventType.REMOVE_MUSICBILL, removeMusicbillListener);
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
      eventemitter.off(EventType.FETCH_MUSICBILL, getMusicbillListener);
      eventemitter.off(EventType.UPDATE_MUSICBILL, updateMusicbillListener);
      eventemitter.off(EventType.ADD_MUSICBILL, addMusicbillListener);
      eventemitter.off(EventType.REMOVE_MUSICBILL, removeMusicbillListener);
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
