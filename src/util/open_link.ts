import electron from '../platform/electron';

export default (url: string) =>
  electron ? electron.shell.openExternal(url) : window.open(url);
