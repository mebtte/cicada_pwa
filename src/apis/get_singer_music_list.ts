import api from '.';
import { ApiMusic } from '../constants/music';
import transfromApiMusic from '../utils/transform_api_music';

/**
 * 获取歌手音乐列表
 * @author mebtte<hi@mebtte.com>
 */
async function getSingerMusicList(singerId) {
  const musicList = await api.get<ApiMusic[]>('/get_singer_music_list', {
    params: { singer_id: singerId },
    withToken: true,
  });
  return musicList.map(transfromApiMusic);
}

export default getSingerMusicList;
