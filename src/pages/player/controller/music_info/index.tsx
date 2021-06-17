import React from 'react';
import { useTransition } from 'react-spring';
import styled from 'styled-components';

import MusicInfo from './music_info';
import Skeleton from './skeleton';
import { Music as MusicType } from '../../constants';

const Style = styled.div`
  flex: 1;
  min-width: 0;
  position: relative;
  height: 20px;
  overflow: visible;
`;

const Wrapper = ({
  music,
  onViewMusic,
}: {
  music?: MusicType;
  onViewMusic: () => void;
}) => {
  const transitions = useTransition(music, {
    from: { opacity: 0, transform: 'translate(0, -150%)' },
    enter: { opacity: 1, transform: 'translate(0, -50%)' },
    leave: { opacity: 0, transform: 'translate(0, 50%)' },
  });
  return (
    <Style>
      {transitions((style, m) => {
        if (m) {
          return (
            <MusicInfo style={style} music={m} onViewMusic={onViewMusic} />
          );
        }
        return <Skeleton style={style} />;
      })}
    </Style>
  );
};

export default Wrapper;
