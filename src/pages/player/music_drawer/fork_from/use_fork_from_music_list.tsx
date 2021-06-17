import { useCallback, useEffect, useState } from 'react';

import getMusicForkFrom from '@/apis/get_music_fork_from';
import logger from '@/platform/logger';
import { Music } from '../../constants';
import { transformMusic } from '../../utils';

export default (id: string) => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [forkFromMusicList, setForkFromMusicList] = useState<Music[]>([]);
  const getForkFromMusicList = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const ml = await getMusicForkFrom(id);
      setForkFromMusicList(ml.map(transformMusic));
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

  return { error, loading, forkFromMusicList };
};
