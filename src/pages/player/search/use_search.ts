import { useState, useEffect, useCallback } from 'react';

import useQuery from '@/utils/use_query';
import { RequestStatus } from '@/constant';
import { SearchMusicKey, MusicWithIndex } from '@/constant/music';
import getMusicListRequest from '@/apis/get_music_list';
import logger from '@/platform/logger';

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
  const { keyword } = useQuery<{ keyword: string }>();
  const [status, setStatus] = useState(RequestStatus.NOT_START);
  const [musicList, setMusicList] = useState<MusicWithIndex[]>([]);
  const onSearch = useCallback(() => {
    if (!keyword) {
      return;
    }

    effect(keyword);

    setStatus(RequestStatus.LOADING);
    getMusicListRequest({ key: SearchMusicKey.KEYWORD, value: keyword })
      .then((ml) => {
        const { length } = ml;
        setMusicList(
          ml.map((m, index) => ({
            ...m,
            index: length - index,
          })),
        );
        setStatus(RequestStatus.SUCCESS);
      })
      .catch((error) => {
        logger.error(error, { description: '搜索音乐错误', report: true });
        setStatus(RequestStatus.ERROR);
      });
  }, [keyword]);

  useEffect(() => {
    if (!keyword) {
      return;
    }

    let canceled = false;

    effect(keyword);

    setStatus(RequestStatus.LOADING);
    getMusicListRequest({ key: SearchMusicKey.KEYWORD, value: keyword })
      .then((ml) => {
        if (canceled) {
          return;
        }
        const { length } = ml;
        setMusicList(
          ml.map((m, index) => ({
            ...m,
            index: length - index,
          })),
        );
        setStatus(RequestStatus.SUCCESS);
      })
      .catch((error) => {
        logger.error(error, { description: '搜索音乐错误', report: true });
        if (canceled) {
          return;
        }
        setStatus(RequestStatus.ERROR);
      });
    return () => {
      canceled = true;
    };
  }, [keyword]);

  return {
    keyword,
    status,
    musicList,
    reload: onSearch,
  };
};
