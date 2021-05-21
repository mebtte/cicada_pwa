import Eventemitter from 'eventemitter3';

export enum Type {
  AUDIO_WAITING = 'audio_waiting', // 音频加载中
  AUDIO_CAN_PLAY_THROUGH = 'audio_can_play_through', // 音频可以播放
  AUDIO_PLAY = 'audio_play', // 音频播放
  AUDIO_PAUSE = 'audio_pause', // 音频暂停
  AUDIO_TIME_UPDATE = 'audio_time_update', // 音频当前时间更新
  AUDIO_ERROR = 'audio_error', // 音频发生错误

  ACTION_TOGGLE_PLAY = 'action_toggle_play',
  ACTION_PLAY = 'action_play',
  ACTION_PAUSE = 'action_pause',
  ACTION_SET_TIME = 'action_set_time',
  ACTION_PREVIOUS = 'action_previous',
  ACTION_NEXT = 'action_next',
  ACTION_PLAY_MUSIC = 'action_play_music',
  ACTION_ADD_MUSIC_LIST_TO_PLAYLIST = 'action_add_music_list_to_playlist',
  ACTION_INSERT_MUSIC_TO_PLAYQUEUE = 'action_insert_music_to_playqueue',
  ACTION_PLAY_PLAYQUEUE_INDEX = 'action_playqueue_index',
  ACTION_CLEAR_PLAYLIST = 'action_clear_playlist',
  ACTION_REMOVE_PLAYLIST_MUSIC = 'action_remove_playlist_music',
  ACTION_REMOVE_PLAYQUEUE_MUSIC = 'action_remove_playqueue_music',
  ACTION_MOVE_PLAYQUEUE_MUSIC_LATER = 'action_move_playqueue_music_LATER',
  ACTION_MOVE_PLAYQUEUE_MUSIC_EARLY = 'action_move_playqueue_music_EARLY',

  ACTION_UPDATE_VOLUME = 'action_update_volume', // 调整音量

  RELOAD_MUSICBILL_LIST = 'update_musicbill_list', // 重新获取歌单列表
  FETCH_MUSICBILL = 'fetch_musicbill', // 获取歌单
  UPDATE_MUSICBILL = 'update_musicbill', // 更新歌单
  ADD_MUSICBILL = 'add_musicbill', // 添加歌单
  REMOVE_MUSICBILL = 'remove_musicbill', // 移除歌单
  ADD_MUSIC_TO_MUSICBILL = 'add_music_to_musicbill', // 添加音乐到歌单
  REMOVE_MUSIC_FROM_MUSICBILL = 'remove_music_from_musicbill', // 从歌单移除音乐
  UPDATE_MUSICBILL_ORDER = 'update_musicbill_order', // 更新歌单顺序

  CHANGE_PLAY_MODE = 'change_play_mode', // 更换播放模式

  OPEN_CREATE_MUSICBILL_DIALOG = 'open_create_musicbill_dialog',
  OPEN_MUSIC_OPERATE_POPUP = 'open_music_operate_popup',
  OPEN_MUSICBILL_LIST_DRAWER = 'open_musicbill_list_drawer',
  OPEN_SINGER_DRAWER = 'open_singer_drawer',
  OPEN_MUSIC_DRAWER = 'open_music_drawer',
  OPEN_MV_DIALOG = 'open_mv_dialog',
  OPEN_ORIGINAL_MUSIC_DIALOG = 'open_original_music_dialog',
  OPEN_MUSICBILL_ORDER_DRAWER = 'open_musicbill_order_drawer',
  OPEN_PLAYLIST_PLAYQUEUE_DRAWER = 'open_playlist_playqueue_drawer',
  TOGGLE_PLAYLIST_PLAYQUEUE_DRAWER = 'toggle_playlist_playqueue_drawer',
}

export default new Eventemitter();