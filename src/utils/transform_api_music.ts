import { ApiMusic, Music } from '../constants/music';
import getRandomCover from './get_random_cover';

export default (music: ApiMusic): Music => {
  const {
    id,
    cover,
    name,
    type,
    alias,
    accompany,
    hq,
    mv,
    sq,
    singers,
  } = music;
  return {
    id,
    cover: cover || getRandomCover(),
    name,
    type,
    alias,
    accompany,
    hq,
    mv,
    sq,
    singers: singers.map((s) => ({
      ...s,
      avatar: s.avatar || getRandomCover(),
    })),
  };
};
