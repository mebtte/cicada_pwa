import React from 'react';

import { Music as MusicType } from '@/constant/music';
import Music from './music';

const MusicList = ({
  containerWidth,
  musicList,
}: {
  containerWidth: number;
  musicList: MusicType[];
}) => (
  <div className="list">
    {musicList.map((music) => (
      <Music key={music.id} containerWidth={containerWidth} music={music} />
    ))}
  </div>
);

export default MusicList;
