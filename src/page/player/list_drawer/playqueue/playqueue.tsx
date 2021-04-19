import React, { useMemo } from 'react';
import styled from 'styled-components';
import List from 'react-list';

import scrollbar from '../../../../style/scrollbar';
import { MusicWithPid } from '../../../../constant/music';
import Container from '../container';
import Music from './music';

const Style = styled(Container)`
  ${scrollbar}
  overflow: auto;
  padding: 0 20px;
`;

const Playqueue = ({
  playqueue,
  currentPlayqueuePosition,
}: {
  playqueue: MusicWithPid[];
  currentPlayqueuePosition: number;
}) => {
  const reversedPlayqueue = useMemo(() => [...playqueue].reverse(), [
    playqueue,
  ]);
  const { length } = reversedPlayqueue;
  const activeIndex = currentPlayqueuePosition + 1;
  const itemRenderer = (index, key) => {
    const music = reversedPlayqueue[index];
    return (
      <Music
        key={key}
        activeIndex={activeIndex}
        music={music}
        playqueueLength={length}
      />
    );
  };
  return (
    <Style>
      <List length={length} type="uniform" itemRenderer={itemRenderer} />
    </Style>
  );
};

export default Playqueue;
