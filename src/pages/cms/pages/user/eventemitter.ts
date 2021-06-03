import Eventemitter from 'eventemitter3';

export enum EventType {
  USER_CREATED_OR_UPDATED = 'user_created_or_updated',

  OPEN_UPDATE_DIALOG = 'open_update_dialog',
}

export default new Eventemitter<EventType>();
