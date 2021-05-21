export interface Figure {
  id: string;
  avatar: string;
  name: string;
  alias: string;
  createTime: Date;
}

export enum Query {
  SEARCH_NAME = 'search_name',
  SEARCH_ALIAS = 'search_alias',
  PAGE = 'page',

  CREATE_FIGURE_DIALOG_OPEN = 'create_figure_dialog_open',
}
