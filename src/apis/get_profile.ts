/* eslint-disable camelcase */
import { User } from '@/constants/user';

import api from '.';
import getRandomCover from '../utils/get_random_cover';

/**
 * 获取用户资料
 * @author mebtte<hi@mebtte.com>
 */
async function getProfile(): Promise<User> {
  const {
    id,
    email,
    avatar,
    nickname,
    status,
    join_time: joinTime,
    cms,
  } = await api.get<{
    id: string;
    email: string;
    avatar: string;
    join_time: string;
    nickname: string;
    status: string;
    cms: number;
  }>('/user/profile', {
    withToken: true,
  });
  return {
    id,
    email,
    avatar: avatar || getRandomCover(),
    nickname,
    status,
    joinTime: new Date(joinTime),
    cms: !!cms,
  };
}

export default getProfile;
