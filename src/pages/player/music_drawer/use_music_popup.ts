import { useState, useEffect, useCallback } from 'react';

import { Music as MusicType } from '../constants';
import eventemitter, { EventType } from '../eventemitter';

export default () => {
  const [open, setOpen] = useState(false);
  const [music, setMusic] = useState<MusicType | null>(null);
  const onClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const openListener = (m: MusicType) => {
      setMusic(m);
      setOpen(true);
    };
    const closeListener = () => setOpen(false);
    eventemitter.on(EventType.OPEN_MUSIC_DRAWER, openListener);
    eventemitter.on(EventType.OPEN_SINGER_DRAWER, closeListener);
    eventemitter.on(EventType.OPEN_MUSICBILL_LIST_DRAWER, closeListener);
    eventemitter.on(EventType.OPEN_MUSIC_OPERATE_POPUP, closeListener);
    return () => {
      eventemitter.off(EventType.OPEN_MUSIC_DRAWER, openListener);
      eventemitter.off(EventType.OPEN_SINGER_DRAWER, closeListener);
      eventemitter.off(EventType.OPEN_MUSICBILL_LIST_DRAWER, closeListener);
      eventemitter.off(EventType.OPEN_MUSIC_OPERATE_POPUP, closeListener);
    };
  }, []);

  return {
    open,
    onClose,
    music,
  };
};
