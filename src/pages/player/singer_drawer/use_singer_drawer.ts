import { useState, useEffect, useCallback } from 'react';

import getMusicListRequest from '@/api/get_music_list';
import logger from '@/platform/logger';
import toast from '@/platform/toast';
import dialog from '@/platform/dialog';
import { RequestStatus } from '@/constant';
import openLink from '@/utils/open_link';
import { SearchMusicKey, MusicWithIndex } from '@/constant/music';
import { Figure } from '@/constant/figure';
import eventemitter, { Type as EventType } from '../eventemitter';

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
    getMusicListRequest({
      key: SearchMusicKey.SINGER,
      value: id,
    })
      .then((ml) => {
        const { length } = ml;
        setMusicList(
          ml.map((m, index) => ({
            ...m,
            index: length - index,
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
  const addAllToPlaylist = useCallback(() => {
    if (status === RequestStatus.LOADING) {
      return toast.info('正在加载音乐列表...');
    }
    if (status === RequestStatus.ERROR) {
      return dialog.confirm({
        title: '是否重新加载音乐列表?',
        onConfirm: () => void getMusicList(),
      });
    }
    return eventemitter.emit(
      EventType.ACTION_ADD_MUSIC_LIST_TO_PLAYLIST,
      musicList,
    );
  }, [getMusicList, status, musicList]);
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
