/* eslint-disable camelcase */
import api from '.';
import getRandomCover from '../utils/get_random_cover';

/**
 * 获取用户资料
 * @author mebtte<hi@mebtte.com>
 */
async function getProfile() {
  const {
    id,
    email,
    avatar,
    nickname,
    condition,
    join_time: joinTime,
    cms,
  } = await api.get<{
    id: string;
    email: string;
    avatar: string;
    join_time: string;
    nickname: string;
    condition: string;
    cms: number;
  }>('/get_profile', {
    withToken: true,
  });
  return {
    id,
    email,
    avatar: avatar || getRandomCover(),
    nickname,
    condition,
    joinTime: new Date(joinTime),
    cms: !!cms,
  };
}

export default getProfile;
