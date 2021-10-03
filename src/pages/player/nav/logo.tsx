import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > .icon {
    height: 32px;
  }

  > .text {
    height: 20px;
  }
`;

const Logo = () => (
  <Style>
    <img className="icon" src="/logo.png" alt="logo" />
    <img className="text" src="/text_logo.png" alt="logo" />
  </Style>
);

export default Logo;
