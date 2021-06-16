import { ApiMusic, Music } from '../constants/music';
import getRandomCover from './get_random_cover';

export default (music: ApiMusic): Music => {
  const {
    id,
    cover,
    name,
    type,
    alias,
    ac,
    hq,
    mv_link: mvLink,
    sq,
    singers,
    fork,
    fork_from: forkFrom,
  } = music;
  return {
    id,
    cover: cover || getRandomCover(),
    name,
    type,
    alias,
    ac,
    hq,
    mvLink,
    sq,
    singers: singers.map((s) => ({
      ...s,
      avatar: s.avatar || getRandomCover(),
    })),
    fork: fork || [],
    forkFrom: forkFrom || [],
  };
};
