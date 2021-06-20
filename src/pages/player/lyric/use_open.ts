import { useCallback, useEffect, useState } from 'react';

import eventemitter, { EventType } from '../eventemitter';

export default () => {
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const toggleListener = () => setOpen((o) => !o);
    eventemitter.on(EventType.TOGGEL_LYRIC, toggleListener);
    return () => void eventemitter.off(EventType.TOGGEL_LYRIC, toggleListener);
  }, []);

  return { open, onClose };
};
