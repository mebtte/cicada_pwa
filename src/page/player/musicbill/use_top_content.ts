import { useState, useEffect } from 'react';

import { TopContent } from './constant';
import eventemitter, { Type as EventType } from './eventemitter';

export default (): TopContent => {
  const [topContent, setTopContent] = useState(TopContent.INFO);

  useEffect(() => {
    const topContentChangeListener = (tc) =>
      setTopContent((currentTopContent) =>
        currentTopContent === tc ? TopContent.INFO : tc,
      );
    eventemitter.on(EventType.TOP_CONTENT_CHANGE, topContentChangeListener);
    return () =>
      eventemitter.off(EventType.TOP_CONTENT_CHANGE, topContentChangeListener);
  }, []);

  return topContent;
};
