import { useCallback, useEffect, useState } from 'react';

import cmsGetFigureOperateRecordList from '@/apis/cms_get_figure_operate_record_list';
import logger from '@/platform/logger';
import { PAGE_SIZE, Record } from './constants';

const INITIAL_PAGE = 1;

export default ({
  open,
  searchFigureId,
}: {
  open: boolean;
  searchFigureId: string;
}) => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [recordList, setRecordList] = useState<Record[]>([]);

  const [page, setPage] = useState(INITIAL_PAGE);
  const onPageChange = (p: number) => setPage(p);

  const getRecordList = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const data = await cmsGetFigureOperateRecordList({
        figureId: searchFigureId,
        page,
        pageSize: PAGE_SIZE,
      });
      setTotal(data.total);
      setRecordList(data.list);
    } catch (e) {
      logger.error(e, {
        description: '获取角色操作记录列表失败',
        report: true,
      });
      setError(e);
    }
    setLoading(false);
  }, [searchFigureId, page]);

  useEffect(() => {
    if (open) {
      setPage(INITIAL_PAGE);
    }
  }, [open]);

  useEffect(() => {
    setTotal(0);
    setRecordList([]);
  }, [searchFigureId]);

  useEffect(() => {
    getRecordList();
  }, [getRecordList]);

  return {
    error,
    loading,
    page,
    onPageChange,
    total,
    recordList,
    retry: getRecordList,
  };
};
