import { useState, useCallback, useEffect } from 'react';

import getLrcRequest from '@/api/get_lrc';
import logger from '@/platform/logger';
import { RequestStatus } from '@/constant';
import { Music } from '@/constant/music';

export default (music: Music) => {
  const [status, setStatus] = useState(RequestStatus.LOADING);
  const [lrc, setLrc] = useState('');
  const reload = useCallback(() => {
    setStatus(RequestStatus.LOADING);
    getLrcRequest(music.id)
      .then((l) => {
        setLrc(l);
        setStatus(RequestStatus.SUCCESS);
      })
      .catch((error) => {
        logger.error(error, { description: '获取歌词失败', report: true });
        setStatus(RequestStatus.ERROR);
      });
  }, [music.id]);

  useEffect(() => {
    let canceled = false;
    setStatus(RequestStatus.LOADING);
    getLrcRequest(music.id)
      .then((l) => {
        if (canceled) {
          return;
        }
        setLrc(l);
        setStatus(RequestStatus.SUCCESS);
      })
      .catch((error) => {
        if (canceled) {
          return;
        }
        logger.error(error, {
          description: '获取歌词失败',
          report: true,
        });
        setStatus(RequestStatus.ERROR);
      });
    return () => {
      canceled = true;
    };
  }, [music.id]);

  return {
    status,
    reload,
    lrc,
  };
};
