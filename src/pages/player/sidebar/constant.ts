import { ROOT_PATH, PLAYER_PATH } from '@/constant/route';
import { IS_ELECTRON, IS_WINDOWS, IS_MAC_OS } from '@/constant';
import { Name } from '@/component/icon';
import openLink from '@/utils/open_link';
import dialog from '@/platform/dialog';

export enum NavigatorType {
  LINK = 'link',
  ACTION = 'action',
}

export interface LinkNavigator {
  type: NavigatorType.LINK;
  label: string;
  icon: Name;
  link: string;
}

export interface ActionNavigator {
  type: NavigatorType.ACTION;
  label: string;
  icon: Name;
  action: () => void;
}

export type Navigator = LinkNavigator | ActionNavigator;

const NAVIGATORS: Navigator[] = [
  {
    type: NavigatorType.LINK,
    label: '知了',
    icon: Name.HOME_OUTLINE,
    link: ROOT_PATH.PLAYER,
  },
  {
    type: NavigatorType.LINK,
    label: '设置',
    icon: Name.SETTING_OUTLINE,
    link: PLAYER_PATH.SETTING,
  },
  {
    type: NavigatorType.ACTION,
    label: '关于',
    icon: Name.INFO_OUTLINE,
    action: () =>
      dialog.confirm({
        title: '即将打开新的页面, 是否继续?',
        onConfirm: () =>
          void openLink(`${window.location.origin}#${ROOT_PATH.ABOUT}`),
      }),
  },
];
if (!IS_ELECTRON) {
  NAVIGATORS.push({
    type: NavigatorType.ACTION,
    label: '下载桌面客户端',
    // eslint-disable-next-line no-nested-ternary
    icon: IS_WINDOWS
      ? Name.WINDOW_COLORFULE
      : IS_MAC_OS
      ? Name.MAC_OS_COLORFULE
      : Name.COMPUTER_FILL,
    action: () =>
      dialog.confirm({
        title: '即将前往下载页面, 是否继续?',
        onConfirm: () =>
          void openLink('https://github.com/mebtte/cicada_desktop/releases'),
      }),
  });
}
export { NAVIGATORS };
