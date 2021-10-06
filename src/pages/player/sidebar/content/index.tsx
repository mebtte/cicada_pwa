import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import User from './user';
import Menu from './menu';
import MusicbillList from './musicbill_list';
import MusicbillOperateDrawer from './musicbill_operate_drawer';

const Style = styled.div`
  padding: 30px 0 0 0;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Content = (props: HTMLAttributes<HTMLDivElement>) => (
  <Style {...props}>
    <User />
    <Menu />
    <MusicbillList />
    <MusicbillOperateDrawer />
  </Style>
);

export default Content;
