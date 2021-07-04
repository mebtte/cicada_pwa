import { useEffect, useState } from 'react';

import logger from '@/platform/logger';
import getMusicLrcRequest from '@/apis/get_music_lrc';
import { MusicType } from '@/constants/music';
import { Music } from '../constants';
import { Status } from './constants';

export default (music: Music, turntable: boolean) => {
  const [state, setState] = useState<
    | {
        status: Status.TURNTABLE;
      }
    | {
        status: Status.LRC_LOADING;
      }
    | {
        status: Status.LRC_ERROR;
        error: Error;
        retry: () => void;
      }
    | {
        status: Status.LRC_SUCCESS;
        lrc: string;
      }
    | {
        status: Status.LRC_EMPTY;
      }
  >({
    status: Status.TURNTABLE,
  });

  useEffect(() => {
    let canceled = false;
    const getMusicLrc = async () => {
      if (turntable || music.type === MusicType.INSTRUMENT) {
        return setState({
          status: Status.TURNTABLE,
        });
      }

      setState({
        status: Status.LRC_LOADING,
      });
      try {
        const lrc = await getMusicLrcRequest(music.id);

        if (canceled) {
          return;
        }

        if (lrc) {
          setState({ status: Status.LRC_SUCCESS, lrc });
        } else {
          setState({ status: Status.LRC_EMPTY });
        }
      } catch (error) {
        if (canceled) {
          return;
        }
        logger.error(error, { description: '获取音乐 LRC 失败', report: true });
        setState({ status: Status.LRC_ERROR, error, retry: getMusicLrc });
      }
    };

    getMusicLrc();
    return () => {
      canceled = true;
    };
  }, [music, turntable]);

  return state;
};
