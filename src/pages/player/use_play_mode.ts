import { useEffect, useState } from 'react';

import { PlayMode } from './constant';
import { PLAY_MODE } from '../../constants/storage_key';
import eventemitter, { Type as EventType } from './eventemitter';

export default () => {
  const [playMode, setPlayMode] = useState<PlayMode>(() => {
    const pm = localStorage.getItem(PLAY_MODE) as PlayMode;
    return pm && Object.values(PlayMode).includes(pm) ? pm : PlayMode.SQ;
  });

  useEffect(() => {
    const playModeChangeListener = (pm: PlayMode) => setPlayMode(pm);
    eventemitter.on(EventType.CHANGE_PLAY_MODE, playModeChangeListener);
    return () =>
      void eventemitter.off(EventType.CHANGE_PLAY_MODE, playModeChangeListener);
  }, []);

  return playMode;
};
