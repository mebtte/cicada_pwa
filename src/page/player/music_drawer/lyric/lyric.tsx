import React from 'react';
import { Lrc, LyricLine } from 'react-lrc';

import Line from './line';

const LyricList = ({ lrc }: { lrc: string }) => (
  <Lrc
    lrc={lrc}
    lineRenderer={({ line }: { line: LyricLine }) => (
      <Line>{line.content}</Line>
    )}
    autoScroll={false}
  />
);

export default React.memo(LyricList);
