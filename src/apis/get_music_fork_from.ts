import { ApiMusic } from '@/constants/music';
import tranfromApiMusic from '@/utils/transform_api_music';
import api from '.';

/**
 * 获取音乐二次创作来源
 * @author mebtte<hi@mebtte.com>
 */
async function getMusicForkFrom(id: string) {
  const musicList = await api.get<ApiMusic[]>('/get_music_fork_from', {
    withToken: true,
    params: { id },
  });
  return musicList.map(tranfromApiMusic);
}

export default getMusicForkFrom;
