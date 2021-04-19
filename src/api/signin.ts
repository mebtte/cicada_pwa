/* eslint-disable camelcase */
import api from '.';
import getRandomCover from '../util/get_random_cover';
import { Power } from '../constant/user';

/**
 * 登录
 * @author mebtte<hi@mebtte.com>
 */
async function signin({
  email,
  verifyCode,
}: {
  email: string;
  verifyCode: string;
}) {
  const {
    avatar,
    id,
    nickname,
    status,
    token,
    powers,
    token_expired_at: tokenExpiredAt,
    join_time: joinTime,
  } = await api.post<{
    avatar: string;
    id: string;
    nickname: string;
    status: string;
    token: string;
    token_expired_at: string;
    powers: Power[];
    join_time: string;
  }>('/1/user/signin', {
    data: { email, verify_code: verifyCode },
  });
  return {
    email,
    avatar: avatar || getRandomCover(),
    id,
    nickname,
    status,
    powers,
    token,
    tokenExpiredAt,
    joinTime: new Date(joinTime),
  };
}

export default signin;
