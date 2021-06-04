export enum PlayMode {
  SQ = 'sq',
  HQ = 'hq',
  AC = 'ac',
}
export const PLAY_MODE_MAP_LABEL: Record<PlayMode, string> = {
  [PlayMode.SQ]: '标准音质',
  [PlayMode.HQ]: '高音质',
  [PlayMode.AC]: '伴奏',
};
export const PLAY_MODES = Object.keys(PLAY_MODE_MAP_LABEL) as PlayMode[];

export enum Query {
  KEYWORD = 'keyword',
  PAGE = 'page',
  LRC_SEARCH_DIALOG_OPEN = 'lrc_search_dialog_open',
}
