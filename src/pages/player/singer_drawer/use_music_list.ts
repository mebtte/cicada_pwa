import { useState, useEffect, useCallback } from 'react';

import getSingerMusicList from '@/server/get_singer_music_list';
import logger from '@/platform/logger';
import { RequestStatus } from '@/constants';
import { Figure } from '../constants';
import { MusicList } from './constants';
import { transformMusic } from '../utils';

export default ({ singer }: { singer: Figure }) => {
  const [musicList, setMusicList] = useState<MusicList>({
    status: RequestStatus.LOADING,
  });

  const getMusicList = useCallback(async () => {
    setMusicList({
      status: RequestStatus.LOADING,
    });
    try {
      const ml = await getSingerMusicList(singer.id);
      setMusicList({
        status: RequestStatus.SUCCESS,
        value: ml.map((m, index) => ({
          index: ml.length - index,
          music: transformMusic(m),
        })),
      });
    } catch (error) {
      logger.error(error, {
        description: '获取歌手音乐列表失败',
        report: true,
      });
      setMusicList({ status: RequestStatus.ERROR, error });
    }
  }, [singer]);

  useEffect(() => {
    getMusicList();
  }, [getMusicList]);

  return { musicList, reload: getMusicList };
};
