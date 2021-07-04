import React from 'react';
import styled, { css } from 'styled-components';
import { Lrc, LyricLine as LyricLineType } from 'react-lrc';

import scrollbarNever from '@/style/scrollbar_never';
import useAudioCurrentMillisecond from '../use_audio_current_millisecond';

const StyledLrc = styled(Lrc)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${scrollbarNever}
`;
const LyricLine = styled.div<{ active: boolean }>`
  text-align: center;
  padding: 5px 0;
  > .content {
    max-width: 80%;
    line-height: 1.5;
    display: inline-block;
    border-radius: 5px;
    padding: 7px 15px 5px 15px;
    font-size: 16px;
    text-align: center;
    transition: 300ms;
  }
  ${({ active }) => css`
    > .content {
      color: ${active ? 'var(--color-primary)' : 'var(--text-color-primary)'};
      background: rgb(255 255 255 / ${active ? 1 : 0.7});
    }
  `}
`;
const lrcLineRenderer = ({
  active,
  line,
}: {
  active: boolean;
  line: LyricLineType;
}) => (
  <LyricLine active={active}>
    <div className="content">{line.content}</div>
  </LyricLine>
);

const LrcDisplay = ({ lrc }: { lrc: string }) => {
  const currentMillisecond = useAudioCurrentMillisecond();
  return (
    <StyledLrc
      lrc={lrc}
      lineRenderer={lrcLineRenderer}
      currentMillisecond={currentMillisecond}
      topBlank
      bottomBlank
    />
  );
};

export default LrcDisplay;
