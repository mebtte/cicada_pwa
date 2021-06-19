import React from 'react';

import { Music } from '../../constants';
import useData from './use_data';
import MusicList from './music_list';

const ForkFrom = ({ music }: { music: Music }) => {
  const { forkMusicList, forkFromMusicList } = useData(music);
  return (
    <>
      {forkMusicList.length ? (
        <MusicList label="被以下音乐二次创作" musicList={forkMusicList} />
      ) : null}
      {forkFromMusicList.length ? (
        <MusicList label="二次创作自以下音乐" musicList={forkFromMusicList} />
      ) : null}
    </>
  );
};

export default ForkFrom;
