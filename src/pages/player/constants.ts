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

export const MUSIC_TAG_COLOR = {
  AC: 'rgb(49, 194, 124)',
  HQ: 'rgb(255,119,75)',
  MV: 'rgb(1,196,240)',
};

export enum Query {
  SEARCH_KEY = 'search_key',
  SEARCH_VALUE = 'search_value',
  PAGE = 'page',
}
export type QueryObject = { [key in Query]?: string };
