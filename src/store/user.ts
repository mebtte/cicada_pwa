import { TOKEN_EXPIRED_AT, TOKEN, USER } from '../constant/storage_key';
import * as TYPE from './action_type';
import { getToken, clearToken } from '../platform/token';
import { User } from '../constant/user';
import getProfile from '../api/get_profile';
import logger from '../platform/logger';
import dialog from '../platform/dialog';

export const setUser = (
  user: User & {
    token?: string;
    tokenExpiredAt?: string;
  },
) => (dispatch) => {
  const { tokenExpiredAt, token, ...u } = user;
  if (tokenExpiredAt && token) {
    localStorage.setItem(TOKEN_EXPIRED_AT, tokenExpiredAt);
    localStorage.setItem(TOKEN, token);
  }
  localStorage.setItem(USER, JSON.stringify(u));
  dispatch({
    type: TYPE.SET_USER,
    payload: user,
  });
};

export const reloadUser = () => async (dispatch, getState) => {
  const { user: u }: { user: User | null } = getState();
  if (!u) {
    return;
  }

  return getProfile()
    .then((user) => dispatch(setUser(user)))
    .catch((error) => {
      logger.error(error, {
        description: '加载用户信息失败',
        report: true,
      });
      dialog.alert({
        title: '加载用户信息失败',
        content: error.message,
      });
    });
};

export const clearUser = () => (dispatch) => {
  clearToken();
  return dispatch({
    type: TYPE.CLEAR_USER,
  });
};

const token = getToken();
let user: User | null = null;
if (token) {
  try {
    user = JSON.parse(localStorage.getItem(USER));
    user.joinTime = new Date(user.joinTime);
  } catch (error) {
    logger.error(error, {
      description: '解析本地用户信息失败',
    });
  }
}

export default (state: User | null = user, { type, payload }): User | null => {
  switch (type) {
    case TYPE.SET_USER:
      return payload;
    case TYPE.CLEAR_USER:
      return null;
    default:
      return state;
  }
};
