import axios from 'axios';

import config from '@/config';
import store from '@/store';
import { clearUser } from '@/store/user';
import sleep from '@/util/sleep';
import toast from '@/platform/toast';
import { getToken, clearToken } from '@/platform/token';

const DO_AUTHORIZE_CODES = [100004];

enum METHOD {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}
class CustomError extends Error {
  code: number;
}

function generateMethod(method: METHOD) {
  return async <DataType>(
    path: string,
    {
      params,
      data,
      timeout = 1000 * 30,
      withToken = false,
      headers,
    }: {
      params?: { [key: string]: string | number };
      data?: any;
      timeout?: number;
      withToken?: boolean;
      headers?: { [key: string]: string };
    } = {},
  ) => {
    if (withToken) {
      const token = getToken();
      if (!token) {
        clearToken();
        throw new Error('登录过期');
      }
      // eslint-disable-next-line no-param-reassign
      headers = {
        ...headers,
        authorization: token,
      };
    }
    const [response] = await Promise.all([
      axios({
        url: `${config.apiOrigin}${path}`,
        method,
        timeout,
        params,
        data,
        headers,
      }),
      sleep(1200),
    ]);
    const { status, statusText } = response;
    if (status !== 200) {
      const error = new CustomError(`${status}:${statusText}`);
      error.code = status;
      throw error;
    }
    const { code, message, data: responseData } = response.data as {
      code: number;
      message: string;
      data: DataType;
    };
    if (code !== 0) {
      // 未登录/登录过期
      if (DO_AUTHORIZE_CODES.includes(code)) {
        toast.error('登录过期, 请重新登录');
        // @ts-ignore
        store.dispatch(clearUser());
      }
      const error = new CustomError(`${message}(#${code})`);
      error.code = code;
      throw error;
    }
    return responseData;
  };
}

export default {
  get: generateMethod(METHOD.GET),
  post: generateMethod(METHOD.POST),
  delete: generateMethod(METHOD.DELETE),
  put: generateMethod(METHOD.PUT),
};
