import React from 'react';
import styled from 'styled-components';
import { SearchKey } from '../constants';

import Search from './search';

const Style = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

const MusicList = ({ searchKey }: { searchKey: SearchKey }) => {
  return (
    <Style>
      <Search searchKey={searchKey} />
    </Style>
  );
};

export default MusicList;
