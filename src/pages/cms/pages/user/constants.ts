import cmsGetUserList from '@/apis/cms_get_user_list';

export const PAGE_SIZE = 20;

export type User = AsyncReturnType<typeof cmsGetUserList>['list'][0];

export enum Query {
  PAGE = 'page',
  SEARCH_KEY = 'search_key',
  SEARCH_VALUE = 'search_value',

  CREATE_DIALOG_OPEN = 'create_dialog_open',
  SELECTED_USER_LIST_DIALOG_OPEN = 'selected_user_list_dialog_open',
  SEND_EMAIL_NOTIFICATION_DIALOG_OPEN = 'send_email_notification_dialog_open',

  EMAIL_NOTIFICATION_HISTORY_DIALOG_OPEN = 'email_notification_history_dialog_oepn',
  EMAIL_NOTIFICATION_HISTORY_TO_USRE_ID = 'email_notification_history_to_user_id',

  OPERATE_RECORD_DIALOG_OPEN = 'operate_record_dialog_open',
  OPERATE_RECORD_TARGET_USER_ID = 'operate_record_target_user_id',
}
