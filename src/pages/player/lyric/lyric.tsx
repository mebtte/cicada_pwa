import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { LyricLine } from 'react-lrc';

import { container, StyledLrc, Line } from './constant';
import eventemitter, { Type as EventType } from '../eventemitter';

const Style = styled(animated.div)`
  ${container};
`;

const Lyric = ({ lrc, ...props }: { lrc: string; [key: string]: any }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const lineRenderer = useCallback(
    ({ line, active }: { line: LyricLine; active: boolean }) => (
      <Line active={active}>{line.content}</Line>
    ),
    [],
  );

  useEffect(() => {
    const timeUpdateListener = (ct) => setCurrentTime(ct * 1000);
    eventemitter.on(EventType.AUDIO_TIME_UPDATE, timeUpdateListener);
    return () =>
      void eventemitter.off(EventType.AUDIO_TIME_UPDATE, timeUpdateListener);
  }, []);

  return (
    <Style {...props}>
      <StyledLrc
        lrc={lrc}
        currentMillisecond={currentTime}
        lineRenderer={lineRenderer}
      />
    </Style>
  );
};

export default Lyric;
