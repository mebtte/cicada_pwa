import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { DASHBOARD_PATH } from '../../../constant/route';

import MenuItem from './menu_item';
import { Name } from '../../../component/icon';

const Style = styled.div`
  width: 220px;
`;

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <Style>
      <MenuItem
        iconName={Name.HOME_OUTLINE}
        label="总览"
        to={DASHBOARD_PATH.HOME}
        active={DASHBOARD_PATH.HOME === pathname}
      />
      <MenuItem
        iconName={Name.FIGURE_OUTLINE}
        label="角色"
        to={DASHBOARD_PATH.FIGURE}
        active={DASHBOARD_PATH.FIGURE === pathname}
      />
      <MenuItem
        iconName={Name.MUSIC_FILL}
        label="音乐"
        to={DASHBOARD_PATH.MUSIC}
        active={DASHBOARD_PATH.MUSIC === pathname}
      />
    </Style>
  );
};

export default Sidebar;
