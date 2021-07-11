import day from '@/utils/day';
import { USER } from '../constants/storage_key';
import * as TYPE from './action_type';
import { getToken, clearToken } from '../platform/token';
import { User } from '../constants/user';
import getProfile from '../apis/get_profile';
import logger from '../platform/logger';
import dialog from '../platform/dialog';

export const setUser = (user: User) => (dispatch) => {
  localStorage.setItem(USER, JSON.stringify(user));
  dispatch({
    type: TYPE.SET_USER,
    payload: user,
  });
};

export const reloadUser = () => async (dispatch, getState) => {
  if (!getState().user) {
    return;
  }

  return getProfile()
    .then((user) =>
      dispatch(
        setUser({
          ...user,
          joinTimeString: day(user.joinTime).format('YYYY-MM-DD HH:mm'),
        }),
      ),
    )
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
