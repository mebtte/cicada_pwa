import React from 'react';
import styled from 'styled-components';
import List from 'react-list';

import scrollbar from '@/style/scrollbar';
import { MusicWithIndex } from '../../constants';
import Music from './music';

const Style = styled.div`
  flex: 1;
  min-height: 0;
  padding: 0 20px;
  overflow: auto;
  ${scrollbar}
`;

const Playlist = ({ playlist }: { playlist: MusicWithIndex[] }) => {
  const itemRenderer = (index, key) => (
    <Music key={key} listMusic={playlist[index]} />
  );
  return (
    <Style>
      <List
        length={playlist.length}
        type="uniform"
        itemRenderer={itemRenderer}
      />
    </Style>
  );
};

export default Playlist;
