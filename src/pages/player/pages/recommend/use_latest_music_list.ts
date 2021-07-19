import { useState, useEffect, useCallback } from 'react';

import { RequestStatus } from '@/constants';
import getLatestMusicList from '@/server/get_latest_music_list';
import eventemitter, { Type } from './eventemitter';
import { PAGE_SIZE } from './constant';
import { Music } from '../../constants';
import { transformMusic } from '../../utils';

export default () => {
  const [status, setStatus] = useState(RequestStatus.LOADING);
  const [error, setError] = useState<Error | null>(null);

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const onPageChange = useCallback((p) => {
    setPage(p);
    eventemitter.emit(Type.SCROLL_TO_TOP);
  }, []);

  const [musicList, setMusicList] = useState<Music[]>([]);
  const getMusicListOfPage = useCallback(async () => {
    setStatus(RequestStatus.LOADING);
    try {
      const { count, music_list: ml } = await getLatestMusicList({
        page,
        pageSize: PAGE_SIZE,
      });
      setMusicList(ml.map(transformMusic));
      setPageCount(Math.ceil(count / PAGE_SIZE));
      setStatus(RequestStatus.SUCCESS);
    } catch (e) {
      setError(e);
      setStatus(RequestStatus.ERROR);
    }
  }, [page]);

  useEffect(() => {
    getMusicListOfPage();
  }, [getMusicListOfPage]);

  return {
    status,
    error,
    retry: getMusicListOfPage,
    page,
    pageCount,
    onPageChange,
    musicList,
  };
};
