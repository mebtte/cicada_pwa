/* eslint-disable camelcase */
import api from '.';
import { ApiMusic } from '../constants/music';
import transformApiMusic from '../utils/transform_api_music';

async function getLatestMusicList(page: number, pageSize = 30) {
  const { count, music_list: musicList } = await api.get<{
    count: number;
    music_list: ApiMusic[];
  }>('/music/latest_list', {
    params: { page, page_size: pageSize },
    withToken: true,
  });
  return {
    count,
    musicList: musicList.map(transformApiMusic),
  };
}

export default getLatestMusicList;
