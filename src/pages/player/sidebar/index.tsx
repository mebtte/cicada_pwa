import React from 'react';
import styled from 'styled-components';

import User from './user';
import MusicbillList from './musicbill_list';
import Menu from './menu';

const Style = styled.div`
  z-index: 2;
  position: relative;
  width: 240px;
  display: flex;
  flex-direction: column;
`;

const Sidebar = () => (
  <Style>
    <User />
    <Menu />
    <MusicbillList />
  </Style>
);

export default Sidebar;
