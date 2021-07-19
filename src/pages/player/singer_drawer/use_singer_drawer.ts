import { useState, useEffect, useCallback } from 'react';

import getSingerMusicList from '@/server/get_singer_music_list';
import logger from '@/platform/logger';
import { RequestStatus } from '@/constants';
import openLink from '@/utils/open_link';
import { Figure, MusicWithIndex } from '../constants';
import eventemitter, { EventType } from '../eventemitter';
import { transformMusic } from '../utils';

export default () => {
  const [open, setOpen] = useState(false);
  const [singer, setSinger] = useState<Figure>(null);
  const [status, setStatus] = useState(RequestStatus.NOT_START);
  const [musicList, setMusicList] = useState<MusicWithIndex[]>([]);
  const id = singer ? singer.id : '';
  const getMusicList = useCallback(() => {
    if (!id) {
      return;
    }
    setStatus(RequestStatus.LOADING);
    getSingerMusicList(id)
      .then((ml) => {
        const { length } = ml;
        setMusicList(
          ml.map((m, index) => ({
            index: length - index,
            music: transformMusic(m),
          })),
        );
        setStatus(RequestStatus.SUCCESS);
      })
      .catch((error) => {
        logger.error(error, {
          description: '获取歌手音乐列表失败',
          report: true,
        });
        setStatus(RequestStatus.ERROR);
      });
  }, [id]);
  const onClose = useCallback(() => setOpen(false), []);
  const addAllToPlaylist = useCallback(
    () =>
      eventemitter.emit(
        EventType.ACTION_ADD_MUSIC_LIST_TO_PLAYLIST,
        musicList.map((m) => m.music),
      ),
    [musicList],
  );
  const toNeteaseCloudMusic = useCallback(() => {
    openLink(
      `https://music.163.com/#/search/m/?s=${encodeURIComponent(
        singer.name,
      )}&type=100`,
    );
    setOpen(false);
  }, [singer]);

  useEffect(() => {
    const openListener = (s: Figure) => {
      setOpen(true);
      setSinger(s);
    };
    const closeListener = () => setOpen(false);
    eventemitter.on(EventType.OPEN_SINGER_DRAWER, openListener);
    eventemitter.on(EventType.OPEN_MUSIC_DRAWER, closeListener);
    eventemitter.on(EventType.OPEN_MUSICBILL_LIST_DRAWER, closeListener);
    eventemitter.on(EventType.OPEN_MUSIC_OPERATE_POPUP, closeListener);
    return () => {
      eventemitter.off(EventType.OPEN_SINGER_DRAWER, openListener);
      eventemitter.off(EventType.OPEN_MUSIC_DRAWER, closeListener);
      eventemitter.off(EventType.OPEN_MUSICBILL_LIST_DRAWER, closeListener);
      eventemitter.off(EventType.OPEN_MUSIC_OPERATE_POPUP, closeListener);
    };
  }, []);
  useEffect(() => {
    getMusicList();
  }, [getMusicList]);

  return {
    open,
    onClose,
    singer,
    status,
    musicList,
    reload: getMusicList,
    addAllToPlaylist,
    toNeteaseCloudMusic,
  };
};
