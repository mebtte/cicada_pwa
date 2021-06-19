import React, { useCallback, useEffect, useRef } from 'react';

import eventemitter, { EventType } from './eventemitter';
import logger from '../../platform/logger';
import dialog from '../../platform/dialog';
import { QueueMusic, PlayMode } from './constants';

const TIME_UPDATE_INTERVAL = 1000 * 0.5; // timeUpdate最大时间间隔

const style = {
  display: 'none',
};
const onWaiting = () => eventemitter.emit(EventType.AUDIO_WAITING);
const onCanPlayThrough = (event) => {
  const { duration } = event.target;
  return eventemitter.emit(EventType.AUDIO_CAN_PLAY_THROUGH, { duration });
};
const onPlay = () => eventemitter.emit(EventType.AUDIO_PLAY);
const onPause = () => eventemitter.emit(EventType.AUDIO_PAUSE);
const onEnded = () => eventemitter.emit(EventType.ACTION_NEXT);
const onError = (e) => {
  logger.error(e, { description: '播放发生错误', report: true });
  dialog.alert({
    title: '播放发生错误',
    content: e.message,
  });
  return eventemitter.emit(EventType.AUDIO_ERROR);
};

const Audio = ({
  playMode,
  queueMusic,
  volume,
}: {
  playMode: PlayMode;
  queueMusic: QueueMusic;
  volume: number;
}) => {
  const { pid, music } = queueMusic;

  const audioRef = useRef<HTMLAudioElement>();
  const lastUpdateTime = useRef(0);
  const onTimeUpdate = useCallback((event) => {
    const { duration, currentTime } = event.target;
    const now = Date.now();
    if (
      now - lastUpdateTime.current >= TIME_UPDATE_INTERVAL ||
      duration - currentTime < TIME_UPDATE_INTERVAL
    ) {
      lastUpdateTime.current = now;
      return eventemitter.emit(EventType.AUDIO_TIME_UPDATE, currentTime);
    }
  }, []);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);
  useEffect(() => {
    audioRef.current.currentTime = 0;
    eventemitter.emit(EventType.AUDIO_TIME_UPDATE, 0);
    audioRef.current.play();
  }, [pid]);
  useEffect(() => {
    const setTimeListener = (time: number) => {
      onWaiting();
      setTimeout(() => {
        audioRef.current.currentTime = time;
        audioRef.current.play();
        eventemitter.emit(EventType.AUDIO_TIME_UPDATE, time);
      }, 0);
    };
    const togglePlayListener = () => {
      if (audioRef.current.paused) {
        return audioRef.current.play();
      }
      return audioRef.current.pause();
    };
    const playListener = () => audioRef.current.play();
    const pauseListener = () => audioRef.current.pause();
    eventemitter.on(EventType.ACTION_SET_TIME, setTimeListener);
    eventemitter.on(EventType.ACTION_TOGGLE_PLAY, togglePlayListener);
    eventemitter.on(EventType.ACTION_PLAY, playListener);
    eventemitter.on(EventType.ACTION_PAUSE, pauseListener);
    eventemitter.on(EventType.OPEN_MV_DIALOG, pauseListener);
    return () => {
      eventemitter.off(EventType.ACTION_SET_TIME, setTimeListener);
      eventemitter.off(EventType.ACTION_TOGGLE_PLAY, togglePlayListener);
      eventemitter.off(EventType.ACTION_PLAY, playListener);
      eventemitter.off(EventType.ACTION_PAUSE, pauseListener);
      eventemitter.off(EventType.OPEN_MV_DIALOG, pauseListener);
    };
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <audio
      ref={audioRef}
      style={style}
      src={(music[playMode] || music.sq) as string}
      autoPlay
      onPlay={onPlay}
      onPause={onPause}
      onEnded={onEnded}
      onWaiting={onWaiting}
      onCanPlayThrough={onCanPlayThrough}
      onTimeUpdate={onTimeUpdate}
      onError={onError}
      preload="auto"
    />
  );
};

export default React.memo(Audio);
