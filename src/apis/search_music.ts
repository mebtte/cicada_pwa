import { ApiMusic } from '@/constants/music';
import transformApiMusic from '@/utils/transform_api_music';

import api from '.';

async function searchMusic() {
  const musicList = [] as ApiMusic[];
  return musicList.map(transformApiMusic);
}

export default searchMusic;
