import api from '.';
import { Key } from '../constant/public_config';

/**
 * 获取公共配置
 * @author mebtte<hi@mebtte.com>
 * @param key 公共配置 key
 */
function getPublicConfig(key: Key) {
  return api.get<string>('/1/public_config', {
    withToken: true,
    params: { key },
  });
}

export default getPublicConfig;
