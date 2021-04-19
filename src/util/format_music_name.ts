import { Music } from '../constant/music';

const SINGERS_MAX_LENGTH = 20;

export default (music: Music) => {
  const singers = music.singers.map((s) => s.name).join(',') || '未知歌手';
  return `${
    singers.length > SINGERS_MAX_LENGTH
      ? `${singers.slice(0, SINGERS_MAX_LENGTH)}...`
      : singers
  } - ${music.name}`;
};
