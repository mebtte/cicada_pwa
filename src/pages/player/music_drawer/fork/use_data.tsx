import { useEffect, useState } from 'react';

import getMusicFork from '@/apis/get_music_fork';
import getMusicForkFrom from '@/apis/get_music_fork_from';
import logger from '@/platform/logger';
import { Music } from '../../constants';
import { transformMusic } from '../../utils';

export default (music: Music) => {
  const [forkMusicList, setForkMusicList] = useState<Music[]>([]);
  const [forkFromMusicList, setForkFromMusicList] = useState<Music[]>([]);

  useEffect(() => {
    if (music.fork.length) {
      getMusicFork(music.id)
        .then((ml) => setForkMusicList(ml.map(transformMusic)))
        .catch((error) =>
          logger.error(error, {
            description: '获取音乐二次创作失败',
            report: true,
          }),
        );
    }
    if (music.forkFrom.length) {
      getMusicForkFrom(music.id)
        .then((ml) => setForkFromMusicList(ml.map(transformMusic)))
        .catch((error) =>
          logger.error(error, {
            description: '获取音乐二次创作来源失败',
            report: true,
          }),
        );
    }
  }, [music]);

  return { forkMusicList, forkFromMusicList };
};
