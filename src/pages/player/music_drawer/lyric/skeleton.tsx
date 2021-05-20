import React, { useState } from 'react';

import getRandomInteger from '@/utils/get_random_integer';
import Skeleton from '@/components/skeleton';
import Line from './line';

const Wrapper = () => {
  const [items] = useState(
    Array.from({ length: getRandomInteger(5, 15) }, () =>
      getRandomInteger(30, 200),
    ),
  );
  return (
    <div>
      {items.map((width, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Line key={index}>
          <Skeleton width={width} />
        </Line>
      ))}
    </div>
  );
};

export default React.memo(Wrapper);
