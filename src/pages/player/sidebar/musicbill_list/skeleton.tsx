import React, { useState } from 'react';
import styled from 'styled-components';

import getRandomInteger from '@/utils/get_random_integer';
import Skeleton from '@/components/skeleton';
import { CONTAINETR_STYLE, NAME_STYLE, COVER_SIZE } from './constant';

const Style = styled.div`
  ${CONTAINETR_STYLE}
  > .name {
    ${NAME_STYLE}
  }
`;

const SkeletonWrapper = () => {
  const [array] = useState(
    new Array(getRandomInteger(5, 15)).fill(0).map((_, index) => ({
      key: index,
      nameWidth: getRandomInteger(40, 100),
    })),
  );
  return (
    <>
      {array.map(({ key, nameWidth }) => (
        <Style key={key}>
          <Skeleton width={COVER_SIZE} height={COVER_SIZE} />
          <div className="name">
            <Skeleton width={nameWidth} />
          </div>
        </Style>
      ))}
    </>
  );
};

export default SkeletonWrapper;
