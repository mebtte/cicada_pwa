/* eslint-disable camelcase */
import format from 'date-fns/format';

import api from '.';
import getRandomCover from '../utils/get_random_cover';

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
  >('/musicbill/list', { withToken: true });
  return data.map(
    ({ cover, id, name, order, description, create_time: createTime }) => ({
      cover: cover || getRandomCover(),
      id,
      name,
      order,
      description,
      createTime: format(new Date(createTime), 'yyyy-MM-dd'),
    }),
  );
}

export default getMusicbillList;
