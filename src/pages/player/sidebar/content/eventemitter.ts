import Eventemitter from 'eventemitter3';

export enum EventType {
  OPEN_MUSICBILL_OPERATE_DRAWER = 'open_musicbill_operate_drawer', // 打开歌单操作弹窗, { }
  CLOSE_MUSICBILL_OPERATE_DRAWER = 'CLOSE_musicbill_operate_drawer', // 关闭歌单操作弹窗, { }
}

export default new Eventemitter<EventType>();
