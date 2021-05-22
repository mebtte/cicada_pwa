import Eventemitter from 'eventemitter3';

export enum EventType {
  OPEN_EDIT_MUSIC_COVER_DIALOG = 'open_edit_music_cover_dialog',
  OPEN_EDIT_MUSIC_DIALOG = 'open_edit_music_dialog',
  OPEN_EDIT_MUSIC_SINGERS_DIALOG = 'open_edit_music_singers_dialog',
}

export default new Eventemitter<EventType>();
