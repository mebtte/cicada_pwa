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
  CREATE_FIGURE_DIALOG_OPEN = 'create_figure_dialog_open',
}

export type QueryObject = {
  [key in Query]?: string;
};

export enum SearchKey {
  NAME = 'name',
  ID = 'id',
  ALIAS = 'alias',
}

export const SEARCH_KEY_MAP_LALEL: Record<SearchKey, string> = {
  [SearchKey.NAME]: '名字',
  [SearchKey.ID]: 'ID',
  [SearchKey.ALIAS]: '别名',
};

export const SEARCH_KEYS = Object.keys(SEARCH_KEY_MAP_LALEL) as SearchKey[];