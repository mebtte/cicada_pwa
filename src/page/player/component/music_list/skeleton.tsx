import React from 'react';
import styled from 'styled-components';

import { containerStyle } from './constant';
import getRandomInteger from '../../../../util/get_random_integer';
import Skeleton from '../music/skeleton';

const Style = styled.div`
  overflow: hidden;
`;

const SkeletonWrapper = () => (
  <Style style={containerStyle}>
    {Array.from({ length: getRandomInteger(5, 20) }, () => 0).map(
      (_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Skeleton key={index} />
      ),
    )}
  </Style>
);

export default React.memo(SkeletonWrapper);
