import React, { useState } from 'react';

import getRandomInteger from '@/utils/get_random_integer';
import Skeleton from '@/component/skeleton';

const Wrapper = () => {
  const [width] = useState(getRandomInteger(20, 50));
  return <Skeleton width={width} />;
};

export default React.memo(Wrapper);
