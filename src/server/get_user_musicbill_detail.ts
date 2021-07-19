/* eslint-disable camelcase */
import api from '.';
import { MusicType } from '../constants/music';

/**
 * 获取用户歌单详情
 * @author mebtte<hi@mebtte.com>
 */
function getUserMusicbillDetail(id: string) {
  return api.get<{
    id: string;
    cover: string;
    name: string;
    description: string;
    create_time: string;
    music_list: {
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
    }[];
  }>('/api/get_user_musicbill_detail', {
    params: { id },
    withToken: true,
  });
}

export default getUserMusicbillDetail;
