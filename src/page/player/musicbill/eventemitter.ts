import Eventemitter from 'eventemitter3';

export enum Type {
  TOP_CONTENT_CHANGE = 'top_content_change',
  KEYWORD_CHANGE = 'keyword_change',
}

export default new Eventemitter();
