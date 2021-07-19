/* eslint-disable camelcase */
import { MusicType } from '@/constants/music';
import api from '.';

/**
 * 获取最新音乐列表
 * @author mebtte<hi@mebtte.com>
 */
function getLatestMusicList({
  page = 1,
  pageSize = 30,
}: {
  page?: number;
  pageSize?: number;
} = {}) {
  return api.get<{
    count: number;
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
  }>('/api/get_latest_music_list', {
    params: { page, page_size: pageSize },
    withToken: true,
  });
}

export default getLatestMusicList;
