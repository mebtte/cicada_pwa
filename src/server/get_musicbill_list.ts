/* eslint-disable camelcase */
import api from '.';
import getRandomCover from '../utils/get_random_cover';

/**
 * 获取歌单列表
 * @author mebtte<hi@mebtte.com>
 */
async function getMusicbillList() {
  const data = await api.get<
    {
      cover?: string;
      id: string;
      name: string;
      description: string;
      order: number;
      create_time: string;
    }[]
  >('/api/get_musicbill_list', { withToken: true });
  return data.map(
    ({ cover, id, name, order, description, create_time: createTime }) => ({
      cover: cover || getRandomCover(),
      id,
      name,
      order,
      description,
      createTime: new Date(createTime),
    }),
  );
}

export default getMusicbillList;
