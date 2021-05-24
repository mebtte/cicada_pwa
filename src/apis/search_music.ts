import { ApiMusic } from '@/constants/music';
import transformApiMusic from '@/utils/transform_api_music';

import api from '.';

export enum SearchKey {
  MUSIC_NAME = 'music_name',
  SINGER_NAME = 'singer_name',
  LRC = 'lrc',
}
export const SEARCH_KEY_MAP: Record<SearchKey, { label: string }> = {
  [SearchKey.MUSIC_NAME]: {
    label: '歌名',
  },
  [SearchKey.SINGER_NAME]: {
    label: '歌手',
  },
  [SearchKey.LRC]: {
    label: '歌词',
  },
};
export const SEARCH_KEYS = Object.keys(SEARCH_KEY_MAP) as SearchKey[];

async function searchMusic({
  searchKey,
  searchValue,
  page = 1,
  pageSize = 30,
}: {
  searchKey: SearchKey;
  searchValue: string;
  page?: number;
  pageSize?: number;
}) {
  const data = await api.get<{
    total: number;
    list: ApiMusic[];
  }>('/search_music', {
    params: {
      search_key: searchKey,
      search_value: searchValue,
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
