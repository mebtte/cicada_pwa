/* eslint-disable no-nested-ternary */
import { ROOT_PATH, PLAYER_PATH } from '@/constants/route';
import {
  IS_ELECTRON,
  IS_WINDOWS,
  IS_MAC_OS,
  ELECTRON_GITHUB_REPOSITORY,
} from '@/constants';
import { Name } from '@/components/icon';
import openLink from '@/utils/open_link';
import dialog from '@/platform/dialog';
import config from '@/config';

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
    label: 'CMS',
    icon: Name.CMS_OUTLINE,
    action: () =>
      dialog.confirm({
        title: '即将打开新的页面, 是否继续?',
        onConfirm: () => void openLink(`${config.pwaOrigin}#${ROOT_PATH.CMS}`),
      }),
  },
  {
    type: NavigatorType.ACTION,
    label: '关于',
    icon: Name.INFO_OUTLINE,
    action: () =>
      dialog.confirm({
        title: '即将打开新的页面, 是否继续?',
        onConfirm: () =>
          void openLink(`${config.pwaOrigin}#${ROOT_PATH.ABOUT}`),
      }),
  },
];
if (!IS_ELECTRON) {
  NAVIGATORS.push({
    type: NavigatorType.ACTION,
    label: '桌面客户端',
    icon: IS_WINDOWS
      ? Name.WINDOW_COLORFULE
      : IS_MAC_OS
      ? Name.MAC_OS_COLORFULE
      : Name.COMPUTER_FILL,
    action: () =>
      dialog.confirm({
        title: '即将打开新的页面, 是否继续?',
        onConfirm: () =>
          void openLink(`${ELECTRON_GITHUB_REPOSITORY}/releases`),
      }),
  });
}
export { NAVIGATORS };
