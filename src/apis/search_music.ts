import { ApiMusic } from '@/constants/music';
import transformApiMusic from '@/utils/transform_api_music';

import api from '.';

export enum SearchKey {
  MUSIC_NAME_OR_ALIAS = 'music_name_or_alias',
  SINGER_NAME_OR_ALIAS = 'singer_name_or_alias',
  MUSIC_LRC = 'music_lrc',
}
export const SEARCH_KEY_MAP: Record<SearchKey, { label: string }> = {
  [SearchKey.MUSIC_NAME_OR_ALIAS]: {
    label: '音乐',
  },
  [SearchKey.SINGER_NAME_OR_ALIAS]: {
    label: '歌手',
  },
  [SearchKey.MUSIC_LRC]: {
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
