import { useCallback, useEffect, useState } from 'react';

import eventemitter, { EventType } from '../eventemitter';
import { Figure } from '../constants';

export default () => {
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => setOpen(false), []);

  const [singer, setSinger] = useState<Figure | null>(null);

  useEffect(() => {
    const openListener = ({ singer: s }: { singer: Figure }) => {
      setSinger(s);
      return setOpen(true);
    };
    const closeListener = () => setOpen(false);

    eventemitter.on(EventType.OPEN_SINGER_DRAWER, openListener);

    eventemitter.on(EventType.OPEN_MUSIC_DRAWER, closeListener);
    eventemitter.on(EventType.OPEN_MUSICBILL_LIST_DRAWER, closeListener);
    eventemitter.on(EventType.OPEN_MUSIC_OPERATE_POPUP, closeListener);
    return () => {
      eventemitter.off(EventType.OPEN_SINGER_DRAWER, openListener);

      eventemitter.off(EventType.OPEN_MUSIC_DRAWER, closeListener);
      eventemitter.off(EventType.OPEN_MUSICBILL_LIST_DRAWER, closeListener);
      eventemitter.off(EventType.OPEN_MUSIC_OPERATE_POPUP, closeListener);
    };
  }, []);

  return { open, onClose, singer };
};
