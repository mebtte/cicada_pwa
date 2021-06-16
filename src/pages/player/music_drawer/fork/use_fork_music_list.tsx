import { useCallback, useEffect, useState } from 'react';

import getMusicFork from '@/apis/get_music_fork';
import { Music } from '@/constants/music';
import logger from '@/platform/logger';

export default (id: string) => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [forkMusicList, setForkMusicList] = useState<Music[]>([]);
  const getForkFromMusicList = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const ml = await getMusicFork(id);
      setForkMusicList(ml);
    } catch (e) {
      logger.error(e, {
        description: '获取音乐二次创作来源列表失败',
        report: true,
      });
      setError(e);
    }
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getForkFromMusicList();
  }, [getForkFromMusicList]);

  return { error, loading, forkMusicList };
};
