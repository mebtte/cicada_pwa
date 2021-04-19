/* eslint-disable camelcase */
import api from '.';
import getRandomCover from '../util/get_random_cover';
import { Power } from '../constant/user';

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
    status,
    join_time: joinTime,
    powers,
  } = await api.get<{
    id: string;
    email: string;
    avatar: string;
    join_time: string;
    nickname: string;
    powers: Power[];
    status: string;
  }>('/1/user/profile', {
    withToken: true,
  });
  return {
    id,
    email,
    avatar: avatar || getRandomCover(),
    nickname,
    status,
    joinTime: new Date(joinTime),
    powers,
  };
}

export default getProfile;
