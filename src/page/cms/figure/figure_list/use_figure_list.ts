import { useState, useEffect, useCallback } from 'react';

import useQuery from '@/util/use_query';
import { RequestStatus } from '../../../../constant';
import getFigureListRequest from '../../../../api/get_figure_list';
import { SearchKey, Figure } from '../../../../constant/figure';
import logger from '../../../../platform/logger';
import eventemitter, { Type as EventType } from '../eventemitter';

export default () => {
  const { keyword } = useQuery<{ keyword?: string }>();

  const [status, setStatus] = useState(RequestStatus.NOT_START);
  const [error, setError] = useState<Error>();
  const [figureList, setFigureList] = useState<Figure[]>([]);
  const retry = useCallback(async () => {
    if (!keyword) {
      return setStatus(RequestStatus.NOT_START);
    }
    setStatus(RequestStatus.LOADING);
    try {
      const fl = await getFigureListRequest({
        key: SearchKey.KEYWORD,
        value: keyword,
      });
      setFigureList(fl);
      setStatus(RequestStatus.SUCCESS);
    } catch (e) {
      logger.error(e, {
        description: '获取角色列表失败',
        report: true,
      });
      setError(e);
      setStatus(RequestStatus.ERROR);
    }
  }, [keyword]);

  useEffect(() => {
    let canceled = false;
    const getFigureList = async () => {
      if (!keyword) {
        return setStatus(RequestStatus.NOT_START);
      }
      setStatus(RequestStatus.LOADING);
      try {
        const fl = await getFigureListRequest({
          key: SearchKey.KEYWORD,
          value: keyword,
        });

        if (canceled) {
          return;
        }
        setFigureList(fl);
        setStatus(RequestStatus.SUCCESS);
      } catch (e) {
        if (canceled) {
          return;
        }
        logger.error(e, {
          description: '获取角色列表失败',
          report: true,
        });
        setError(e);
        setStatus(RequestStatus.ERROR);
      }
    };
    getFigureList();

    eventemitter.on(EventType.FIGURE_CREATED, getFigureList);
    return () => {
      canceled = true;

      eventemitter.off(EventType.FIGURE_CREATED, getFigureList);
    };
  }, [keyword]);

  useEffect(() => {
    const removeListener = (id) =>
      setFigureList((fl) => fl.filter((f) => f.id !== id));
    const updateListener = ({ id, key, value }) =>
      setFigureList((fl) =>
        fl.map((f) =>
          f.id === id
            ? {
                ...f,
                [key]: value,
              }
            : f,
        ),
      );

    eventemitter.on(EventType.FIGURE_REMOVED, removeListener);
    eventemitter.on(EventType.FIGURE_UPDATED, updateListener);
    return () => {
      eventemitter.off(EventType.FIGURE_REMOVED, removeListener);
      eventemitter.off(EventType.FIGURE_UPDATED, updateListener);
    };
  }, []);

  return {
    keyword,

    status,
    error,
    retry,
    figureList,
  };
};
