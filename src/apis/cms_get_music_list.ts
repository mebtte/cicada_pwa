/* eslint-disable camelcase */
import { MusicType } from '@/constants/music';
import api from '.';

export enum SearchKey {
  ID = 'id',
  NAME = 'name',
  ALIAS = 'alias',
  SINGER_ID = 'singer_id',
  SINGER_NAME = 'singer_name',
}

export const SEARCH_KEY_MAP_LABEL: Record<SearchKey, string> = {
  [SearchKey.ID]: 'ID',
  [SearchKey.NAME]: '名字',
  [SearchKey.ALIAS]: '别名',
  [SearchKey.SINGER_ID]: '歌手 ID',
  [SearchKey.SINGER_NAME]: '歌手名字',
};

export const SEARCH_KEYS = Object.keys(SEARCH_KEY_MAP_LABEL);

async function cmsGetMusicList({
  page = 1,
  pageSize = 30,
  searchKey,
  searchValue,
}: {
  page?: number;
  pageSize?: number;
  searchKey?: SearchKey;
  searchValue?: string;
}) {
  const params =
    searchKey && searchValue
      ? {
          page,
          page_size: pageSize,
          search_key: searchKey,
          search_value: searchValue,
        }
      : {
          page,
          page_size: pageSize,
        };
  const data = await api.get<{
    total: number;
    list: {
      id: string;
      cover: string;
      name: string;
      alias: string;
      type: MusicType;
      singers: {
        id: string;
        avatar: string;
        name: string;
        alias: string;
      }[];
      create_time: string;
    }[];
  }>('/cms/get_music_list', {
    params,
    withToken: true,
  });
  return {
    total: data.total,
    list: data.list.map(
      ({
        id: musicId,
        cover,
        name: musicName,
        alias: musicAlias,
        type,
        singers,
        create_time: createTime,
      }) => ({
        id: musicId,
        cover,
        name: musicName,
        alias: musicAlias,
        type,
        singers,
        createTime: new Date(createTime),
      }),
    ),
  };
}

export default cmsGetMusicList;
