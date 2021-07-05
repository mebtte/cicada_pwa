import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import eventemitter, { EventType } from '../eventemitter';

export default () => {
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const closeListener = () => setOpen(false);
    const toggleListener = () => setOpen((o) => !o);
    eventemitter.on(EventType.CLOSE_LYRIC, closeListener);
    eventemitter.on(EventType.TOGGEL_LYRIC, toggleListener);
    return () => {
      eventemitter.off(EventType.CLOSE_LYRIC, closeListener);
      eventemitter.off(EventType.TOGGEL_LYRIC, toggleListener);
    };
  }, []);

  useEffect(() => {
    const unlisten = history.listen(() => setOpen(false));
    return unlisten;
  }, [history]);

  return { open, onClose };
};
