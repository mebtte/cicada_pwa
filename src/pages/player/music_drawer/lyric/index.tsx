import React from 'react';

import { RequestStatus } from '@/constants';
import useMusicLrc from '@/utils/use_music_lrc';
import { Music } from '../../constants';
import Lyric from './lyric';

const Wrapper = ({ music }: { music: Music }) => {
  const { lrc } = useMusicLrc(music.id);
  if (lrc.status !== RequestStatus.SUCCESS || !lrc.value) {
    return null;
  }

  return <Lyric lrc={lrc.value} />;
};

export default Wrapper;
