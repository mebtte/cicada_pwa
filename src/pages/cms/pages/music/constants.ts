export interface Figure {
  id: string;
  avatar: string;
  name: string;
  alias: string;
  createTime: Date;
}

export enum Query {
  CREATE_MUSIC_DIALOG_OPEN = 'create_music_dialog_open',
}
