/* eslint-disable camelcase */
import format from 'date-fns/format';

import api from '.';
import getRandomCover from '../utils/get_random_cover';
import { UpdateKey } from '../constant/musicbill';

/**
 * 更新歌单
 * @author mebtte<hi@mebtte.com>
 */
async function updateMusicbill({
  id,
  key,
  value,
}: {
  id: string;
  key: UpdateKey;
  value: string | Blob;
}) {
  const form = new FormData();
  form.append('id', id);
  form.append('key', key);
  form.append('value', value);
  const musicbill = await api.put<{
    cover: string;
    name: string;
    order: number;
    description: string;
    create_time: string;
  }>('/musicbill', {
    data: form,
    withToken: true,
  });
  const {
    cover,
    name,
    order,
    description,
    create_time: createTime,
  } = musicbill;
  return {
    cover: cover || getRandomCover(),
    id,
    name,
    order,
    description,
    createTime: format(new Date(createTime), 'yyyy-MM-dd'),
  };
}

export default updateMusicbill;
