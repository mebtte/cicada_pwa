import React from 'react';

import AnimateCover from '@/components/animate_cover';
import { Singer } from '../constants';
import { AVATAR_SIZE, Container } from './constants';

const SingerInfo = ({ singer }: { singer: Singer }) => (
  <Container>
    <div className="info">
      <div className="name">{singer.name}</div>
      {singer.alias ? <div className="alias">{singer.alias}</div> : null}
    </div>
    <AnimateCover src={singer.avatar} size={AVATAR_SIZE} alt="avatar" />
  </Container>
);

export default SingerInfo;
