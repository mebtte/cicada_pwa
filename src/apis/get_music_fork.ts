import { ApiMusic } from '@/constants/music';
import tranfromApiMusic from '@/utils/transform_api_music';
import api from '.';

/**
 * 获取音乐二次创作
 * @author mebtte<hi@mebtte.com>
 */
async function getMusicFork(id: string) {
  const musicList = await api.get<ApiMusic[]>('/get_music_fork', {
    withToken: true,
    params: { id },
  });
  return musicList.map(tranfromApiMusic);
}

export default getMusicFork;
