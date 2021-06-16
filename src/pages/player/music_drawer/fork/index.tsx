import React from 'react';

import { Music } from '@/constants/music';
import useMusicForkMusicList from './use_fork_music_list';
import ForkMusicList from './fork_music_list';

const ForkFrom = ({ music }: { music: Music }) => {
  const { error, loading, forkMusicList } = useMusicForkMusicList(music.id);
  if (error || loading) {
    return null;
  }
  return <ForkMusicList forkMusicList={forkMusicList} />;
};

export default ForkFrom;
