import { MusicType } from '@/constants/music';

export interface Figure {
  id: string;
  avatar: string;
  name: string;
  alias: string;
  createTime: Date;
}

export interface Music {
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
  createTime: Date;
}

export enum Query {
  SEARCH_KEY = 'search_key',
  SEARCH_VALUE = 'search_value',
  CREATE_MUSIC_DIALOG_OPEN = 'create_music_dialog_open',
  PAGE = 'page',
}

export type QueryObject = {
  [key in Query]?: string;
};

export enum SearchKey {
  ID = 'id',
  NAME = 'name',
  ALIAS = 'alias',
  SINGER_ID_OR_NAME = 'singerIdOrName',
}

export const SEARCH_KEY_MAP: Record<
  SearchKey,
  {
    label: string;
    placeholder: string;
  }
> = {
  [SearchKey.ID]: { label: 'ID', placeholder: '搜索音乐 ID' },
  [SearchKey.NAME]: { label: '名字', placeholder: '搜索音乐名字' },
  [SearchKey.ALIAS]: { label: '别名', placeholder: '搜索音乐别名' },
  [SearchKey.SINGER_ID_OR_NAME]: {
    label: '歌手',
    placeholder: '搜索歌手 ID 或名字',
  },
};

export const SEARCH_KEYS = Object.keys(SEARCH_KEY_MAP) as SearchKey[];

export const PAGE_SIZE = 30;
