import Eventemitter from 'eventemitter3';

export enum EventType {
  MUSIC_CREATED_OR_UPDATED_OR_DELETED = 'music_created_or_updated_or_deleted',
  OPEN_EDIT_MUSIC_COVER_DIALOG = 'open_edit_music_cover_dialog',
  OPEN_EDIT_MUSIC_DIALOG = 'open_edit_music_dialog',
  OPEN_EDIT_MUSIC_SINGER_LIST_DIALOG = 'open_edit_music_singer_list_dialog',
  OPEN_EDIT_MUSIC_LRC_DIALOG = 'open_edit_music_lrc_dialog',
  OPEN_EDIT_MUSIC_RESOURCE_DIALOG = 'open_edit_music_resource_dialog',
}

export default new Eventemitter<EventType>();
