import Eventemitter from 'eventemitter3';

export enum EventType {
  OPEN_CREATE_FIGURE_DIALOG = 'open_create_figure_dialog',
  FIGURE_CREATED = 'figure_created',
}

export default new Eventemitter<EventType>();
