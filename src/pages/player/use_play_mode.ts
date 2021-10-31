import { useEffect, useState } from 'react';

import { PlayMode, PLAY_MODES } from './constants';
import { PLAY_MODE } from '../../constants/storage_key';
import eventemitter, { EventType } from './eventemitter';

const getInitialPlayMode = () => {
  const pm = localStorage.getItem(PLAY_MODE) as PlayMode;
  return pm && PLAY_MODES.includes(pm) ? pm : PlayMode.SQ;
};

export default () => {
  const [playMode, setPlayMode] = useState<PlayMode>(getInitialPlayMode);

  useEffect(() => {
    const playModeChangeListener = (pm: PlayMode) => {
      setPlayMode(pm);
      window.requestIdleCallback(() =>
        window.localStorage.setItem(PLAY_MODE, pm),
      );
    };
    eventemitter.on(EventType.CHANGE_PLAY_MODE, playModeChangeListener);
    return () =>
      void eventemitter.off(EventType.CHANGE_PLAY_MODE, playModeChangeListener);
  }, []);

  return playMode;
};
