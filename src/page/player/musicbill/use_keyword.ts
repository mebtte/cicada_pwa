import { useState, useEffect } from 'react';

import eventemitter, { Type as EventType } from './eventemitter';
import { TopContent } from './constant';

export default (topContent: TopContent) => {
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const keywordListener = (k) => setKeyword(k);
    eventemitter.on(EventType.KEYWORD_CHANGE, keywordListener);
    return () => eventemitter.off(EventType.KEYWORD_CHANGE, keywordListener);
  }, []);
  useEffect(() => {
    if (topContent !== TopContent.SEARCH) {
      setKeyword('');
    }
  }, [topContent]);

  return keyword;
};
