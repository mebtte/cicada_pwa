enum Channel {
  RELAUNCH = 'relaunch', // 重启 APP
  OPEN_LINK = 'open_link', // 打开链接

  MINIMIZE_PLAYER_WINDOW = 'minimize_player_window', // 最小化播放器窗口
  HIDE_PLAYER_WINDOW = 'hide_player_window', // 隐藏播放器窗口

  CLOSE_CONFIG_WINDOW = 'close_config_window', // 关闭配置窗口

  GET_UI_ORIGIN = 'get_ui_origin', // 获取 UI 源
  SET_UI_ORIGIN = 'set_ui_origin', // 设置 UI 源
}

const getElectron = () => window.require('electron');

export const relaunch = (): Promise<void> =>
  getElectron().ipcRenderer.invoke(Channel.RELAUNCH);
export const openLink = ({ link }: { link: string }): Promise<void> =>
  getElectron().ipcRenderer.invoke(Channel.OPEN_LINK, { link });

export const minimizePlayerWindow = (): Promise<void> =>
  getElectron().ipcRenderer.invoke(Channel.MINIMIZE_PLAYER_WINDOW);
export const hidePlayerWindow = (): Promise<void> =>
  getElectron().ipcRenderer.invoke(Channel.HIDE_PLAYER_WINDOW);

export const closeConfigWindow = (): Promise<void> =>
  getElectron().ipcRenderer.invoke(Channel.CLOSE_CONFIG_WINDOW);

export const getUIOrigin = (): Promise<string> =>
  getElectron().ipcRenderer.invoke(Channel.GET_UI_ORIGIN);
export const setUIOrigin = ({
  uiOrigin,
}: {
  uiOrigin: string;
}): Promise<void> =>
  getElectron().ipcRenderer.invoke(Channel.SET_UI_ORIGIN, { uiOrigin });
