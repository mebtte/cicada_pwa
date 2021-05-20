import api from '.';

/**
 * 获取歌词
 * @author mebtte<hi@mebtte.com>
 */
function getLrc(id) {
  return api.get<string>('/music/lrc', {
    params: { id },
    withToken: true,
  });
}

export default getLrc;
