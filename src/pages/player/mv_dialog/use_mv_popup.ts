import { useState, useCallback, useEffect } from 'react';

import { Music as MusicType } from '@/constant/music';
import eventemitter, { Type as EventType } from '../eventemitter';

export default () => {
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => setOpen(false), []);
  const [music, setMusic] = useState<MusicType>(null);

  useEffect(() => {
    const openListener = (m: MusicType) => {
      setMusic(m);
      setOpen(true);
    };
    const closeListener = () => setOpen(false);
    eventemitter.on(EventType.OPEN_MV_DIALOG, openListener);
    eventemitter.on(EventType.AUDIO_PLAY, closeListener);
    return () => {
      eventemitter.off(EventType.OPEN_MV_DIALOG, openListener);
      eventemitter.off(EventType.AUDIO_PLAY, closeListener);
    };
  }, []);

  return {
    open,
    onClose,
    music,
  };
};
