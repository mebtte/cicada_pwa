import api from '.';

export enum Key {
  SEARCH_WORD = 'search_word', // 搜索词
}

/**
 * 获取公共配置
 * @author mebtte<hi@mebtte.com>
 */
function getPublicConfig(key: Key) {
  return api.get<string>('/get_public_config', {
    withToken: true,
    params: { key },
  });
}

export default getPublicConfig;
