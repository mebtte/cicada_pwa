import Eventemitter from 'eventemitter3';

export enum EventType {
  FIGURE_CREATED = 'figure_created',
}

export default new Eventemitter<EventType>();
