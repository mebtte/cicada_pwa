export interface Figure {
  id: string;
  avatar: string;
  name: string;
  alias: string;
  createTime: Date;
}

export enum Query {
  CREATE_FIGURE_DIALOG_OPEN = 'create_figure_dialog_open',
}
