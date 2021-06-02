export const ROOT_PATH = {
  HOME: '/',
  SIGNIN: '/signin',
  PLAYER: '/player',
  CMS: '/cms',
  DESKTOP_CONFIGURE: '/desktop_configure',
};

export const PLAYER_PATH = {
  RECOMMEND: ROOT_PATH.PLAYER,
  MUSICBILL: `${ROOT_PATH.PLAYER}/musicbill/:id`,
  SETTING: `${ROOT_PATH.PLAYER}/setting`,
  SEARCH: `${ROOT_PATH.PLAYER}/search`,
  LYRIC: `${ROOT_PATH.PLAYER}/lyric`,
};

export const CMS_PATH = {
  DASHBOARD: ROOT_PATH.CMS,
  USER: `${ROOT_PATH.CMS}/user`,
  FIGURE: `${ROOT_PATH.CMS}/figure`,
  MUSIC: `${ROOT_PATH.CMS}/music`,
  PUBLIC_CONFIG: `${ROOT_PATH.CMS}/public_config`,
};
