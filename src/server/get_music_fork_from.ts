/* eslint-disable camelcase */
import { MusicType } from '@/constants/music';
import api from '.';

/**
 * 获取音乐二次创作来源
 * @author mebtte<hi@mebtte.com>
 */
function getMusicForkFrom(id: string) {
  return api.get<
    {
      id: string;
      cover: string;
      name: string;
      type: MusicType;
      alias: string;
      ac: string;
      hq: string;
      mv_link: string;
      sq: string;
      singers: {
        id: string;
        name: string;
        avatar: string;
        alias: string;
      }[];
      fork?: string[];
      fork_from?: string[];
    }[]
  >('/api/get_music_fork_from', {
    withToken: true,
    params: { id },
  });
}

export default getMusicForkFrom;