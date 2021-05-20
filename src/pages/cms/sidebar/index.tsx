import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { CMS_PATH } from '../../../constants/route';

import MenuItem from './menu_item';
import { Name } from '../../../components/icon';

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
        to={CMS_PATH.HOME}
        active={CMS_PATH.HOME === pathname}
      />
      <MenuItem
        iconName={Name.FIGURE_OUTLINE}
        label="角色"
        to={CMS_PATH.FIGURE}
        active={CMS_PATH.FIGURE === pathname}
      />
      <MenuItem
        iconName={Name.MUSIC_FILL}
        label="音乐"
        to={CMS_PATH.MUSIC}
        active={CMS_PATH.MUSIC === pathname}
      />
    </Style>
  );
};

export default Sidebar;
