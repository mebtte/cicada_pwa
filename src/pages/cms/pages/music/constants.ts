import { MusicType } from '@/constants/music';
import { Key } from '@/apis/cms_update_music';

export interface Figure {
  id: string;
  avatar: string;
  name: string;
  alias: string;
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
  sq: string;
  hq: string;
  ac: string;
}

export enum Query {
  SEARCH_KEY = 'search_key',
  SEARCH_VALUE = 'search_value',
  PAGE = 'page',

  CREATE_DIALOG_OPEN = 'create_dialog_open',
}

export const PAGE_SIZE = 30;

export enum EditMusicResourceType {
  SQ = Key.SQ,
  HQ = Key.HQ,
  AC = Key.AC,
}
