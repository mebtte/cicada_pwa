/* eslint-disable camelcase */
import { MusicType } from '@/constants/music';
import { Music } from './constants';

export const transformMusic = (originalMusic: {
  id: string;
  cover: string;
  name: string;
  alias: string;
  type: MusicType;
  singers: {
    id: string;
    name: string;
    alias: string;
  }[];
  create_time: string;
  sq: string;
  hq: string;
  ac: string;
  mv_link: string;
  fork_from?: string[];
}): Music => {
  const {
    id,
    cover,
    name,
    alias,
    type,
    singers,
    create_time: createTime,
    sq,
    hq,
    ac,
    mv_link: mvLink,
    fork_from: forkFrom,
  } = originalMusic;
  return {
    id,
    cover,
    name,
    alias,
    type,
    singers,
    createTime: new Date(createTime),
    sq,
    hq,
    ac,
    mvLink,
    forkFrom: forkFrom || [],
  };
};
