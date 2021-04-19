export const ROOT_PATH = {
  HOME: '/',
  SIGNIN: '/signin',
  PLAYER: '/player',
  DASHBOARD: '/dashboard',
  ABOUT: '/about',
  DESKTOP_CONFIGURE: '/desktop_configure',
};

export const PLAYER_PATH = {
  MUSICBILL: `${ROOT_PATH.PLAYER}/musicbill/:id`,
  SETTING: `${ROOT_PATH.PLAYER}/setting`,
  SEARCH: `${ROOT_PATH.PLAYER}/search`,
  LYRIC: `${ROOT_PATH.PLAYER}/lyric`,
  PROFILE: `${ROOT_PATH.PLAYER}/profile`,
};

export const DASHBOARD_PATH = {
  HOME: ROOT_PATH.DASHBOARD,
  FIGURE: `${ROOT_PATH.DASHBOARD}/figure`,
  MUSIC: `${ROOT_PATH.DASHBOARD}/music`,
};
