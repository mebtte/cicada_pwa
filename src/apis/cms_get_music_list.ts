/* eslint-disable camelcase */
import { MusicType } from '@/constants/music';
import api from '.';

export enum SearchKey {
  COMPOSITE = 'composite',
  ID = 'id',
  NAME = 'name',
  ALIAS = 'alias',
  SINGER_ID = 'singer_id',
  SINGER_NAME = 'singer_name',
}

export const SEARCH_KEY_MAP_LABEL: Record<SearchKey, string> = {
  [SearchKey.COMPOSITE]: '综合',
  [SearchKey.ID]: '音乐ID',
  [SearchKey.NAME]: '音乐名',
  [SearchKey.ALIAS]: '音乐别名',
  [SearchKey.SINGER_ID]: '歌手 ID',
  [SearchKey.SINGER_NAME]: '歌手名',
};

export const SEARCH_KEYS = Object.keys(SEARCH_KEY_MAP_LABEL);
export const SEARCH_VALUE_MAX_LENGTH = 50;

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
      sq: string;
      hq: string;
      ac: string;
      mv_link: string;
      fork_from?: string[];
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
        sq,
        hq,
        ac,
        mv_link: mvLink,
        fork_from: forkFrom,
      }) => ({
        id: musicId,
        cover,
        name: musicName,
        alias: musicAlias,
        type,
        singers,
        createTime: new Date(createTime),
        sq,
        hq,
        ac,
        mvLink,
        forkFrom: forkFrom || [],
      }),
    ),
  };
}

export default cmsGetMusicList;
