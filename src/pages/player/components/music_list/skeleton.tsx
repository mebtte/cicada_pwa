import React from 'react';
import styled from 'styled-components';

import getRandomInteger from '@/utils/get_random_integer';
import { containerStyle } from './constant';
import Skeleton from '../music/skeleton';

const Style = styled.div`
  overflow: hidden;
`;

const SkeletonWrapper = () => (
  <Style style={containerStyle}>
    {Array.from({ length: getRandomInteger(3, 10) }, () => 0).map(
      (_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Skeleton key={index} />
      ),
    )}
  </Style>
);

export default React.memo(SkeletonWrapper);
