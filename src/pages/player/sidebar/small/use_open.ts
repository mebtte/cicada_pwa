import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import eventemitter, { EventType } from '../../eventemitter';

export default () => {
  const history = useHistory();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    eventemitter.on(EventType.OPEN_SIDEBAR, onOpen);
    eventemitter.on(EventType.CLOSE_SIDEBAR, onClose);
    return () => {
      eventemitter.off(EventType.OPEN_SIDEBAR, onOpen);
      eventemitter.off(EventType.CLOSE_SIDEBAR, onClose);
    };
  }, []);

  useEffect(() => {
    const unlisten = history.listen(() => setOpen(false));
    return unlisten;
  }, [history]);

  return open;
};
