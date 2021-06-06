/* eslint-disable camelcase */
import api from '.';
import getRandomCover from '../utils/get_random_cover';
import { ApiMusic } from '../constants/music';
import transformApiMusic from '../utils/transform_api_music';

/**
 * 获取用户歌单详情
 * @author mebtte<hi@mebtte.com>
 */
async function getUserMusicbillDetail(id: string) {
  const musicbill = await api.get<{
    id: string;
    cover: string;
    name: string;
    description: string;
    create_time: string;
    music_list: ApiMusic[];
  }>('/get_user_musicbill_detail', {
    params: { id },
    withToken: true,
  });
  const {
    cover,
    name,
    description,
    create_time: createTime,
    music_list: musicList,
  } = musicbill;
  return {
    id,
    cover: cover || getRandomCover(),
    name,
    description,
    createTime: new Date(createTime),
    musicList: musicList.map(transformApiMusic),
  };
}

export default getUserMusicbillDetail;
