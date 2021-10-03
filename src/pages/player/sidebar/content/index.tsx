import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import User from './user';
import Menu from './menu/index';

const Style = styled.div`
  padding: 30px 0 0 0;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Content = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <Style {...props}>
      <User />
      <Menu />
    </Style>
  );
};

export default Content;
