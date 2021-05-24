import { MusicType } from '@/constants/music';

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
}

export enum Query {
  SEARCH_KEY = 'search_key',
  SEARCH_VALUE = 'search_value',
  PAGE = 'page',
}

export type QueryObject = {
  [key in Query]?: string;
};

export const PAGE_SIZE = 30;
