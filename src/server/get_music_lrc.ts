import api from '.';

/**
 * 获取歌词
 * @author mebtte<hi@mebtte.com>
 */
function getMusicLrc(musicId: string) {
  return api.get<string>('/api/get_music_lrc', {
    params: { music_id: musicId },
    withToken: true,
    noDefer: true,
  });
}

export default getMusicLrc;
