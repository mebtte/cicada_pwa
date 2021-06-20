import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import eventemitter, { EventType } from '../eventemitter';

export default () => {
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const toggleListener = () => setOpen((o) => !o);
    eventemitter.on(EventType.TOGGEL_LYRIC, toggleListener);
    return () => void eventemitter.off(EventType.TOGGEL_LYRIC, toggleListener);
  }, []);

  useEffect(() => {
    const unlisten = history.listen(() => setOpen(false));
    return unlisten;
  }, [history]);

  return { open, onClose };
};
