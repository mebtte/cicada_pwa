import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { CMS_PATH } from '@/constants/route';
import { Name } from '@/components/icon';
import MenuItem from './menu_item';
import { Menu } from './constants';

const Style = styled.div`
  width: 200px;
  background: #f6f6f6;
`;
const MENUS: Menu[] = [
  {
    label: '总览',
    icon: Name.HOME_OUTLINE,
    path: CMS_PATH.HOME,
  },
  {
    label: '角色',
    icon: Name.FIGURE_OUTLINE,
    path: CMS_PATH.FIGURE,
  },
  {
    label: '音乐',
    icon: Name.MUSIC_FILL,
    path: CMS_PATH.MUSIC,
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <Style>
      {MENUS.map((menu) => (
        <MenuItem key={menu.path} pathname={pathname} menu={menu} />
      ))}
    </Style>
  );
};

export default Sidebar;
