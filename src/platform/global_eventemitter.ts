import Eventemitter from 'eventemitter3';

export enum EventType {
  OPEN_PROFILE_DIALOG = 'open_profile_dialog', // 打开个人资料弹窗, { }
}

export default new Eventemitter<EventType>();
