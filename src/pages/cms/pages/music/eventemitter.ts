import Eventemitter from 'eventemitter3';

export enum EventType {
  MUSIC_CREATED_OR_UPDATED_OR_DELETED = 'music_created_or_updated_or_deleted',
  OPEN_EDIT_MUSIC_COVER_DIALOG = 'open_edit_music_cover_dialog',
  OPEN_EDIT_MUSIC_DIALOG = 'open_edit_music_dialog',
  OPEN_EDIT_MUSIC_SINGERS_DIALOG = 'open_edit_music_singers_dialog',
  OPEN_CREATE_MUSIC_DIALOG = 'open_create_music_dialog',
  OPEN_EDIT_MUSIC_LRC_DIALOG = 'open_edit_music_lrc_dialog',
}

export default new Eventemitter<EventType>();
