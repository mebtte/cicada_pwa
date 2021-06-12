import React from 'react';

import { Music } from '@/constants/music';
import useMusicForkMusicList from './use_fork_from_music_list';
import ForkFromMusicList from './fork_from_music_list';

const ForkFrom = ({ music }: { music: Music }) => {
  const { error, loading, forkFromMusicList } = useMusicForkMusicList(music.id);
  if (error || loading) {
    return null;
  }
  return <ForkFromMusicList forkFromMusicList={forkFromMusicList} />;
};

export default ForkFrom;
