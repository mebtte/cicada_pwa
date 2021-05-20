import React from 'react';

import Skeleton from '@/component/skeleton';
import MusicCard from './music_card';
import Cover from './cover';
import { PAGE_SIZE } from './constant';

const Wrapper = ({ containerWidth }: { containerWidth: number }) => (
  <div className="list">
    {new Array(PAGE_SIZE).fill(0).map((_, index) => (
      <MusicCard
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        containerWidth={containerWidth}
      >
        <div className="cover-area">
          <Cover />
        </div>
        <div className="name">
          <Skeleton width={80} />
        </div>
        <div className="singers">
          <Skeleton width={50} />
        </div>
      </MusicCard>
    ))}
  </div>
);

export default Wrapper;
