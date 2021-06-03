export interface User {
  id: string;
  email: string;
  nickname: string;
  remark: string;
  joinTime: Date;
  avatar: string;
  condition: string;
  disabled: 0 | 1;
  cms: 0 | 1;
}

export enum Query {
  CREATE_DIALOG_OPEN = 'create_dialog_open',
}
