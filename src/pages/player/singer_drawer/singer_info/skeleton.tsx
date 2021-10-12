import React, { useMemo } from 'react';

import getRandomInteger from '@/utils/get_random_integer';
import Skeleton from '@/components/skeleton';
import { AVATAR_SIZE, Container } from './constants';

const Wrapper = () => {
  const nameWidth = useMemo(() => getRandomInteger(120, 200), []);
  return (
    <Container>
      <div className="info">
        <div className="name">
          <Skeleton width={nameWidth} />
        </div>
      </div>
      <Skeleton width={AVATAR_SIZE} height={AVATAR_SIZE} />
    </Container>
  );
};

export default React.memo(Wrapper);
