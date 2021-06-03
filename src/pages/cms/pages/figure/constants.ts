export interface Figure {
  id: string;
  avatar: string;
  name: string;
  alias: string;
  createTime: Date;
}

export enum Query {
  PAGE = 'page',
  SEARCH_KEY = 'search_key',
  SEARCH_VALUE = 'search_value',

  CREATE_DIALOG_OPEN = 'create_dialog_open',
}

export type QueryObject = {
  [key in Query]?: string;
};

export const PAGE_SIZE = 30;
