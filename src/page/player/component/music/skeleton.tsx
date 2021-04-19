import React, { useMemo } from 'react';

import getRandomInteger from '../../../../util/get_random_integer';
import Container from './container';
import Skeleton from '../../../../component/skeleton';
import SingerSkeleton from '../singer/skeleton';

const Wrapper = () => {
  const nameWidth = useMemo(() => getRandomInteger(30, 100), []);
  return (
    <Container>
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
