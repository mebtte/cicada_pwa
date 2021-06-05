import Eventemitter from 'eventemitter3';

export enum EventType {
  OPEN_LRC_SEARCH_DIALOG = 'open_lrc_search_dialog',
}

export default new Eventemitter<EventType>();
