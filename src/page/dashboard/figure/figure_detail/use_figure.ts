import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import useQuery from '@/util/use_query';
import { DASHBOARD_PATH } from '@/constant/route';
import { RequestStatus } from '../../../../constant';
import { Figure, SearchKey } from '../../../../constant/figure';
import eventemitter, { Type as EventType } from '../eventemitter';
import getFigureList from '../../../../api/get_figure_list';
import logger from '../../../../platform/logger';

export default () => {
  const history = useHistory();
  const { keyword, figure: id } = useQuery<{
    keyword?: string;
    figure?: string;
  }>();

  const [status, setStatus] = useState(RequestStatus.NOT_START);
  const [error, setError] = useState<Error>();
  const [figure, setFigure] = useState<Figure | null>(null);
  const retry = useCallback(async () => {
    if (!id) {
      return setStatus(RequestStatus.NOT_START);
    }
    setStatus(RequestStatus.LOADING);
    try {
      const [f] = await getFigureList({ key: SearchKey.IDS, value: id });
      if (!f) {
        throw new Error(`角色<ID:${id}>不存在`);
      }
      setFigure(f);
      setStatus(RequestStatus.SUCCESS);
    } catch (e) {
      logger.error(e, {
        description: '获取角色失败',
        report: true,
      });
      setError(e);
      setStatus(RequestStatus.ERROR);
    }
  }, [id]);

  useEffect(() => {
    let canceled = false;
    const getFigure = async () => {
      if (!id) {
        return setStatus(RequestStatus.NOT_START);
      }
      setStatus(RequestStatus.LOADING);
      try {
        const [f] = await getFigureList({ key: SearchKey.IDS, value: id });
        if (!f) {
          throw new Error(`角色<ID:${id}>不存在`);
        }
        if (canceled) {
          return;
        }
        setFigure(f);
        setStatus(RequestStatus.SUCCESS);
      } catch (e) {
        if (canceled) {
          return;
        }
        logger.error(e, {
          description: '获取角色失败',
          report: true,
        });
        setError(e);
        setStatus(RequestStatus.ERROR);
      }
    };
    getFigure();

    return () => {
      canceled = true;
    };
  }, [id]);

  useEffect(() => {
    const updateListener = ({ id: updateId, key, value }) => {
      if (figure.id !== updateId) {
        return;
      }
      return setFigure({
        ...figure,
        [key]: value,
      });
    };
    eventemitter.on(EventType.FIGURE_UPDATED, updateListener);
    return () =>
      void eventemitter.off(EventType.FIGURE_UPDATED, updateListener);
  }, [figure]);

  useEffect(() => {
    const removeListener = () =>
      history.replace(
        `${DASHBOARD_PATH.FIGURE}${
          keyword ? `?keyword=${encodeURIComponent(keyword)}` : ''
        }`,
      );
    eventemitter.on(EventType.FIGURE_REMOVED, removeListener);
    return () =>
      void eventemitter.off(EventType.FIGURE_REMOVED, removeListener);
  }, [keyword, history]);

  return {
    status,
    error,
    retry,
    figure,
  };
};
