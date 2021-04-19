import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { LrcLine } from '@mebtte/react-lrc';

import { container, StyledLrc, Line } from './constant';
import eventemitter, { Type as EventType } from '../eventemitter';

const Style = styled(animated.div)`
  ${container};
`;

const Lyric = ({ lrc, ...props }: { lrc: string; [key: string]: any }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const lineRenderer = useCallback(
    ({ lrcLine, active }: { lrcLine: LrcLine; active: boolean }) => (
      <Line key={lrcLine.id} active={active}>
        {lrcLine.content}
      </Line>
    ),
    [],
  );

  useEffect(() => {
    const timeUpdateListener = (ct) => setCurrentTime(ct * 1000);
    eventemitter.on(EventType.AUDIO_TIME_UPDATE, timeUpdateListener);
    return () =>
      eventemitter.off(EventType.AUDIO_TIME_UPDATE, timeUpdateListener);
  }, []);

  return (
    <Style {...props}>
      <StyledLrc
        lrc={lrc}
        currentTime={currentTime}
        lineRenderer={lineRenderer}
      />
    </Style>
  );
};

export default Lyric;
