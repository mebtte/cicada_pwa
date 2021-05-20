import React, { useState, useEffect, useContext, useMemo } from 'react';
import styled from 'styled-components';

import Slider from '@/components/slider';
import formatSecond from '@/utils/format_second';
import eventemitter, { Type as EventType } from '../eventemitter';
import Context from '../context';

const Style = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  > .time {
    line-height: 1;
    font-size: 12px;
    width: 70px;
    text-align: right;
    transform-origin: right;
    transform: scale(0.9);
    color: rgb(155 155 155);
    > .symbol {
      margin: 0 3px;
      color: rgb(222 222 222);
    }
  }
`;
const sliderStyle = {
  flex: 1,
  minWidth: 0,
};

const Progress = () => {
  const { audioDuration } = useContext(Context);
  const durationString = useMemo(() => formatSecond(audioDuration), [
    audioDuration,
  ]);
  const [currentTime, setCurrentTime] = useState(0);
  const setTime = (p) => {
    if (!audioDuration) {
      return;
    }
    const time = audioDuration * p;
    eventemitter.emit(EventType.ACTION_SET_TIME, time);
  };

  useEffect(() => {
    const timeUpdateListener = (time: number) => setCurrentTime(time);
    eventemitter.on(EventType.AUDIO_TIME_UPDATE, timeUpdateListener);
    return () =>
      void eventemitter.off(EventType.AUDIO_TIME_UPDATE, timeUpdateListener);
  }, []);

  const percent = audioDuration ? currentTime / audioDuration : 0;
  return (
    <Style>
      <Slider
        style={sliderStyle}
        value={percent}
        onChange={setTime}
        min={0}
        max={1}
        step={0.005}
      />
      <div className="time">
        {formatSecond(currentTime)}
        <span className="symbol">|</span>
        {durationString}
      </div>
    </Style>
  );
};

export default React.memo(Progress);
