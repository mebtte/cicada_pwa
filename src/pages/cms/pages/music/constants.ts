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
  SINGER_ID = 'singerId',
  SINGER_NAME = 'singerName',
}

export const SEARCH_KEY_MAP_LABEL: Record<SearchKey, string> = {
  [SearchKey.ID]: 'ID',
  [SearchKey.NAME]: '名字',
  [SearchKey.ALIAS]: '别名',
  [SearchKey.SINGER_ID]: '歌手 ID',
  [SearchKey.SINGER_NAME]: '歌手名字',
};

export const SEARCH_KEYS = Object.keys(SEARCH_KEY_MAP_LABEL) as SearchKey[];

export const PAGE_SIZE = 30;
