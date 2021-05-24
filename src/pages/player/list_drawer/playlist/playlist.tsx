import React from 'react';
import styled from 'styled-components';
import List from 'react-list';

import scrollbar from '../../../../style/scrollbar';
import { MusicWithIndex as MusicType } from '../../../../constants/music';
import Music from './music';

const Style = styled.div`
  flex: 1;
  min-height: 0;
  padding: 0 20px;
  overflow: auto;
  ${scrollbar}
`;

const Playlist = ({ playlist }: { playlist: MusicType[] }) => {
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
