export const ROOT_PATH = {
  HOME: '/',
  SIGNIN: '/signin',
  PLAYER: '/player',
  CMS: '/cms',
  ABOUT: '/about',
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
  HOME: ROOT_PATH.CMS,
  FIGURE: `${ROOT_PATH.CMS}/figure`,
  MUSIC: `${ROOT_PATH.CMS}/music`,
};
