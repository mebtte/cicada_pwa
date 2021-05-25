import { useState, useEffect, useCallback } from 'react';

import useQuery from '@/utils/use_query';
import { MusicWithIndex } from '@/constants/music';
import searchMusic, { SearchKey, SEARCH_KEYS } from '@/apis/search_music';
import logger from '@/platform/logger';
import { Query as PlayerQuery } from '../constants';
import { PAGE_SIZE, Query } from './constants';

const effect = (keyword: string) => {
  // eslint-disable-next-line default-case
  switch (keyword) {
    case '知了': {
      document.querySelector<HTMLDivElement>('#root > div').style.transform =
        'rotateY(0)';
      break;
    }
    case '了知': {
      document.querySelector<HTMLDivElement>('#root > div').style.transform =
        'rotateY(180deg)';
      break;
    }
  }
};

export default () => {
  const query = useQuery<{ keyword: string }>();

  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [musicList, setMusicList] = useState<MusicWithIndex[]>([]);
  const [total, setTotal] = useState(0);

  let searchKey = query[PlayerQuery.SEARCH_KEY] as SearchKey;
  if (!SEARCH_KEYS.includes(searchKey)) {
    searchKey = SearchKey.MUSIC_NAME_OR_ALIAS;
  }
  const searchValue = query[PlayerQuery.SEARCH_VALUE];
  const pageString = query[Query.PAGE];
  const page = pageString ? +pageString : 1 || 1;

  const onSearch = useCallback(async () => {
    effect(searchValue);

    setError(null);
    setLoading(true);
    try {
      const { total: nextTotal, list } = await searchMusic({
        searchKey,
        searchValue,
        page,
        pageSize: PAGE_SIZE,
      });
      setTotal(nextTotal);
      setMusicList(
        list.map((m, index) => ({
          index: list.length - index,
          music: m,
        })),
      );
    } catch (e) {
      logger.error(e, { description: '搜索音乐失败', report: true });
      setError(e);
    }
    setLoading(false);
  }, [searchKey, searchValue, page]);

  useEffect(() => {
    onSearch();
  }, [onSearch]);

  return {
    error,
    loading,
    musicList,
    total,
    reload: onSearch,
    page,
  };
};
