import { useState, useEffect } from 'react';

import eventemitter, { EventType } from '../eventemitter';

export default () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    eventemitter.on(EventType.OPEN_MUSICBILL_LIST_OPERATE_DRAWER, onOpen);
    eventemitter.on(EventType.CLOSE_MUSICBILL_LIST_OPERATE_DRAWER, onClose);
    return () => {
      eventemitter.off(EventType.OPEN_MUSICBILL_LIST_OPERATE_DRAWER, onOpen);
      eventemitter.off(EventType.CLOSE_MUSICBILL_LIST_OPERATE_DRAWER, onClose);
    };
  }, []);

  return open;
};
