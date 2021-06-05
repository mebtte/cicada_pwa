import React, { useMemo } from 'react';

import getRandomInteger from '@/utils/get_random_integer';
import Skeleton from '@/components/skeleton';
import SingerSkeleton from '../singer/skeleton';
import Container from './container';

const Wrapper = (props: { [key: string]: any }) => {
  const nameWidth = useMemo(() => getRandomInteger(30, 100), []);
  return (
    <Container {...props}>
      <div className="index">
        <Skeleton width={25} />
      </div>
      <div className="info">
        <span className="name">
          <Skeleton width={nameWidth} />
        </span>
        <span className="singers">
          <SingerSkeleton />
        </span>
      </div>
    </Container>
  );
};

export default React.memo(Wrapper);
