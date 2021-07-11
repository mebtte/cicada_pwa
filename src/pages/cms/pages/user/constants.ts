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
  EMAIL_NOTIFICATION_DIALOG_OPEN = 'email_notification_dialog_open',
  SELECTED_USER_LIST_DIALOG_OPEN = 'selected_user_list_dialog_open',
}
