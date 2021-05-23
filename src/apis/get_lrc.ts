import api from '.';

/**
 * 获取歌词
 * @author mebtte<hi@mebtte.com>
 */
function getLrc(musicId: string) {
  return api.get<string>('/get_lrc', {
    params: { music_id: musicId },
    withToken: true,
  });
}

export default getLrc;
