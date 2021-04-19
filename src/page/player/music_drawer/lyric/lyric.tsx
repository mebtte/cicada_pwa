import React from 'react';
import { Lrc, LrcLine } from '@mebtte/react-lrc';

import Line from './line';

const LyricList = ({ lrc }: { lrc: string }) => (
  <Lrc
    lrc={lrc}
    lineRenderer={({ lrcLine }: { lrcLine: LrcLine }) => (
      <Line>{lrcLine.content}</Line>
    )}
    autoScroll={false}
  />
);

export default React.memo(LyricList);
