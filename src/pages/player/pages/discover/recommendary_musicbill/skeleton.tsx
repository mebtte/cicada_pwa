import React from 'react';

import Cover from '@/components/cover';
import getRandomInteger from '@/utils/get_random_integer';
import Skeleton from '@/components/skeleton';
import Style from './musicbill_style';
import { COVER_SIZE } from '../constants';

const Wrapper = () => (
  <>
    {new Array(30).fill(0).map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Style key={index}>
        <Cover size={COVER_SIZE} alt="cover" />
        <div className="name">
          <Skeleton width={getRandomInteger(30, COVER_SIZE)} />
        </div>
      </Style>
    ))}
  </>
);

export default React.memo(Wrapper);
