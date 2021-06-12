import React from 'react';

import { RequestStatus } from '@/constants';
import { Music } from '@/constants/music';
import useLrc from '../../use_lrc';
import Lyric from './lyric';

const Wrapper = ({ music }: { music: Music }) => {
  const { status, lrc } = useLrc(music);
  if (status !== RequestStatus.SUCCESS || !lrc) {
    return null;
  }

  return <Lyric lrc={lrc} />;
};

export default Wrapper;
