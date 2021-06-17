/* eslint-disable camelcase */
import api from '.';
import { MusicType } from '../constants/music';

/**
 * 获取歌手音乐列表
 * @author mebtte<hi@mebtte.com>
 */
function getSingerMusicList(singerId: string) {
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
  >('/get_singer_music_list', {
    params: { singer_id: singerId },
    withToken: true,
  });
}

export default getSingerMusicList;
