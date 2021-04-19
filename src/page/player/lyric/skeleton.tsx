import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import getRandomInteger from '@/util/get_random_integer';
import Skeleton from '@/component/skeleton';
import { container, StyledLrc, Line } from './constant';

const Style = styled(animated.div)`
  ${container};
  > .line {
    overflow: hidden;
  }
`;
const LINE_AMOUNT = 50;

const Wrapper = (props: { [key: string]: any }) => {
  const [lrc] = useState(
    new Array(LINE_AMOUNT)
      .fill(0)
      .map(() => `[99:00.000]`)
      .join('\n'),
  );
  const [widthList] = useState(
    new Array(LINE_AMOUNT).fill(0).map(() => `${getRandomInteger(20, 90)}%`),
  );
  const lineRenderer = useCallback(
    ({ index }: { index: number }) => (
      <Line>
        <Skeleton width={widthList[index]} />
      </Line>
    ),
    [widthList],
  );
  return (
    <Style {...props}>
      <StyledLrc lrc={lrc} lineRenderer={lineRenderer} />
    </Style>
  );
};

export default Wrapper;
