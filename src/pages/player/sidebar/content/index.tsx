import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import User from './user';

const Style = styled.div``;

const Content = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <Style {...props}>
      <User />
    </Style>
  );
};

export default Content;
