import React from 'react';
import styled from 'styled-components';

import { CICADA_START_YEAR } from '../constant';

const Style = styled.div`
  padding: 50px 0;
  text-align: center;
  font-size: 12px;
  color: #aaa;
  > .symbol {
    margin: 0 3px;
    font-size: 14px;
  }
  > a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: rgb(49, 194, 124);
    }
  }
`;

const CommonFooter = () => (
  <Style>
    {CICADA_START_YEAR}~{new Date().getFullYear()}
    <span className="symbol">&copy;</span>
    <a href="https://mebtte.com" target="_blank" rel="noopener noreferrer">
      MEBTTE
    </a>
  </Style>
);

export default CommonFooter;
