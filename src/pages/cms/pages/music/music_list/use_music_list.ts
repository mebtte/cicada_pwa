import logger from '@/platform/logger';
import { useCallback, useEffect, useState } from 'react';

import cmsGetMusicList from '@/apis/cms_get_music_list';
import { SearchKey, Music, PAGE_SIZE } from '../constants';

export default ({
  page,
  searchKey,
  searchValue,
}: {
  page: number;
  searchKey: SearchKey;
  searchValue: string;
}) => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [musicList, setMusicList] = useState<Music[]>([]);
  const [total, setTotal] = useState(0);
  const getMusicList = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const data = await cmsGetMusicList({
        page,
        pageSize: PAGE_SIZE,
        [searchKey]: searchValue,
      });
      setTotal(data.total);
      setMusicList(data.list);
    } catch (e) {
      logger.error(e, { description: '获取音乐列表失败', report: true });
      setError(e);
    }
    setLoading(false);
  }, [searchKey, searchValue, page]);

  useEffect(() => {
    getMusicList();
  }, [getMusicList]);

  return { error, loading, musicList, total, retry: getMusicList };
};
