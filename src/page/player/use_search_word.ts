import { useState, useEffect } from 'react';

import { REMOTE_CONFIG_SEARCH_WORD } from '../../constant/storage_key';
import getPublicConfig from '../../api/get_public_config';
import { Key } from '../../constant/public_config';
import logger from '../../platform/logger';

const UPDATE_SEARCH_WORD_INTERVAL = 1000 * 60 * 30;

export default () => {
  const [searchWord, setSearchWord] = useState(
    localStorage.getItem(REMOTE_CONFIG_SEARCH_WORD) || '',
  );

  useEffect(() => {
    const request = () =>
      window.requestIdleCallback(() =>
        getPublicConfig(Key.SEARCH_WORD)
          .then((sw) => {
            localStorage.setItem(REMOTE_CONFIG_SEARCH_WORD, sw);
            return setSearchWord(sw);
          })
          .catch((error) =>
            logger.error(error, {
              description: '获取搜索词失败',
              report: true,
            }),
          ),
      );
    const timer = window.setInterval(request, UPDATE_SEARCH_WORD_INTERVAL);
    return () => window.clearInterval(timer);
  }, []);

  return searchWord;
};
