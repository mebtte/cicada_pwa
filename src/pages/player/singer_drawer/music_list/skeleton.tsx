import React, { useMemo } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import scrollbarAsNeeded from '@/style/scrollbar_as_needed';
import getRandomInteger from '@/utils/get_random_integer';
import { Skeleton } from '../../components/music';
import { containerStyle } from './constants';

const Style = styled(animated.div)`
  ${containerStyle}

  overflow: auto;
  ${scrollbarAsNeeded}
`;

const SkeletonWrapper = ({ style }: { style: unknown }) => {
  const length = useMemo(() => getRandomInteger(3, 10), []);
  return (
    <Style style={style}>
      {new Array(length).fill(0).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Skeleton key={index} />
      ))}
    </Style>
  );
};

export default SkeletonWrapper;
