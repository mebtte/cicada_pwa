import Eventemitter from 'eventemitter3';

export enum Type {
  OPEN_CREATE_DIALOG = 'open_create_dialog',

  FIGURE_CREATED = 'figure_created',
  FIGURE_REMOVED = 'figure_removed',
  FIGURE_UPDATED = 'figure_updated',
}

export default new Eventemitter();
