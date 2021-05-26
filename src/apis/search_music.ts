import { ApiMusic } from '@/constants/music';
import transformApiMusic from '@/utils/transform_api_music';

import api from '.';

async function searchMusic({
  keyword,
  page = 1,
  pageSize = 30,
}: {
  keyword: string;
  page?: number;
  pageSize?: number;
}) {
  const data = await api.get<{
    total: number;
    list: ApiMusic[];
  }>('/search_music', {
    params: {
      keyword,
      page,
      page_size: pageSize,
    },
    withToken: true,
  });
  return {
    total: data.total,
    list: data.list.map(transformApiMusic),
  };
}

export default searchMusic;
