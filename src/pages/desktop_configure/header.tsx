import React from 'react';
import styled from 'styled-components';

import Cover from '@/components/cover';
import { HEADER_HEIGHT } from './constant';

const Style = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  height: ${HEADER_HEIGHT}px;
  width: 100%;
  padding: 0 30px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(5px);
  -webkit-app-region: drag;
  cursor: move;
  > .title {
    font-size: 18px;
    margin-left: 20px;
    user-select: none;
  }
`;

const Header = () => (
  <Style>
    <Cover src="/logo.png" size={32} alt="logo" />
    <div className="title">配置</div>
  </Style>
);

export default React.memo(Header);
