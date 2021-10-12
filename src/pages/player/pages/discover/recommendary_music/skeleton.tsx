import React from 'react';

import getRandomInteger from '@/utils/get_random_integer';
import Cover from '@/components/cover';
import Skeleton from '@/components/skeleton';
import Style from './music_style';
import { COVER_SIZE } from '../constants';

const Wrapper = () => (
  <>
    {new Array(30).fill(0).map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Style key={index}>
        <div className="cover-box">
          <Cover size={COVER_SIZE} alt="cover" />
        </div>
        <div className="name">
          <Skeleton width={getRandomInteger(30, COVER_SIZE)} />
        </div>
        <div className="singers">
          <Skeleton width={getRandomInteger(30, COVER_SIZE)} />
        </div>
      </Style>
    ))}
  </>
);

export default React.memo(Wrapper);
