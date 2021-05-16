import React from 'react';
import styled from 'styled-components';

import SearchBox from './search_box';
import FigureList from './figure_list';

const Style = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

const Wrapper = () => (
  <Style>
    <SearchBox />
    <FigureList />
  </Style>
);

export default Wrapper;
