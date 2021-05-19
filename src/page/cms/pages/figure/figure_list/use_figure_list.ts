import { useCallback, useEffect, useState } from 'react';

import logger from '@/platform/logger';
import useQuery from '@/util/use_query';
import cmsGetFigureList from '@/api/cms_get_figure_list';
import { Figure, Query } from '../constants';
import { PAGE_SIZE } from './constants';

export default () => {
  const query = useQuery<{ [key in Query]: string }>();
  const searchName = query[Query.SEARCH_NAME] || '';
  const searchAlias = query[Query.SEARCH_ALIAS] || '';
  const pageString = query[Query.PAGE];
  const page = pageString ? +pageString : 1 || 1;

  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [figureList, setFigureList] = useState<Figure[]>([]);
  const [total, setTotal] = useState(0);
  const getFigureList = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const { total: latestTotal, list } = await cmsGetFigureList({
        name: searchName,
        alias: searchAlias,
        page,
        pageSize: PAGE_SIZE,
      });
      setTotal(latestTotal);
      setFigureList(list);
    } catch (e) {
      logger.error(e, { description: '获取角色列表失败', report: true });
      setError(e);
    }
    setLoading(false);
  }, [searchName, searchAlias, page]);

  useEffect(() => {
    getFigureList();
  }, [getFigureList]);

  return { error, loading, page, total, figureList, retry: getFigureList };
};
