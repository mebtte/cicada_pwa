import { useCallback, useEffect, useState } from 'react';

import cmsGetUserOperateRecordList from '@/apis/cms_get_user_operate_record_list';
import logger from '@/platform/logger';
import { PAGE_SIZE, Record } from './constants';

const INITIAL_PAGE = 1;
const INITIAL_TOTAL = 0;

export default ({
  open,
  targetUserId,
}: {
  open: boolean;
  targetUserId: string;
}) => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(INITIAL_TOTAL);
  const [recordList, setRecordList] = useState<Record[]>([]);
  const [page, setPage] = useState(INITIAL_PAGE);
  const getRecordList = useCallback(async () => {
    if (!open) {
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const data = await cmsGetUserOperateRecordList({
        targetUserId,
        page,
        pageSize: PAGE_SIZE,
      });
      setTotal(data.total);
      setRecordList(data.list);
    } catch (e) {
      logger.error(e, {
        description: '获取用户操作记录列表失败',
        report: true,
      });
      setError(e);
    }
    setLoading(false);
  }, [open, targetUserId, page]);

  useEffect(() => {
    setPage(INITIAL_PAGE);
    setTotal(INITIAL_TOTAL);
    setRecordList([]);
  }, [targetUserId]);

  useEffect(() => {
    getRecordList();
  }, [getRecordList]);

  return {
    error,
    loading,
    page,
    onPageChange: setPage,
    total,
    recordList,
    retry: getRecordList,
  };
};
