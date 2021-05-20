import { useEffect, useState } from 'react';

import { PlayMode } from './constant';
import { PLAY_MODE } from '../../constant/storage_key';
import eventemitter, { Type as EventType } from './eventemitter';

export default () => {
  const [playMode, setPlayMode] = useState<PlayMode>(() => {
    const pm = localStorage.getItem(PLAY_MODE);
    return (pm && Object.values<string>(PlayMode).includes(pm)
      ? pm
      : PlayMode.NORMAL) as PlayMode;
  });

  useEffect(() => {
    const playModeChangeListener = (pm: PlayMode) => setPlayMode(pm);
    eventemitter.on(EventType.CHANGE_PLAY_MODE, playModeChangeListener);
    return () =>
      void eventemitter.off(EventType.CHANGE_PLAY_MODE, playModeChangeListener);
  }, []);

  return playMode;
};
