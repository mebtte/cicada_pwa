/* eslint-disable camelcase */
import format from 'date-fns/format';

import api from '.';
import getRandomCover from '../util/get_random_cover';

/**
 * 创建歌单
 * @author mebtte <hi@mebtte.com>
 */
async function createMusic(name: string) {
  const { id, order, description, create_time: createTime } = await api.post<{
    id: string;
    order: number;
    description: string;
    create_time: string;
  }>('/1/musicbill', { withToken: true, data: { name } });
  return {
    cover: getRandomCover(),
    id,
    name,
    order,
    description,
    createTime: format(new Date(createTime), 'yyyy-MM-dd'),
    musicList: [],
  };
}

export default createMusic;
