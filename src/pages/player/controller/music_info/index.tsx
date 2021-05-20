import React from 'react';
import { useTransition } from 'react-spring';
import styled from 'styled-components';

import { Music as MusicType } from '@/constants/music';
import MusicInfo from './music_info';
import Skeleton from './skeleton';

const TRANSITION = {
  from: { opacity: 0, transform: 'rotateX(90deg) translateY(-50%)' },
  enter: { opacity: 1, transform: 'rotateX(0deg) translateY(-50%)' },
  leave: { opacity: 0, transform: 'rotateX(-90deg) translateY(-50%)' },
};
const Style = styled.div`
  flex: 1;
  min-width: 0;
  position: relative;
`;

const Wrapper = ({
  music,
  onViewMusic,
}: {
  music?: MusicType;
  onViewMusic: () => void;
}) => {
  // @ts-ignore
  const transitions = useTransition(music, (m) => m && m.id, TRANSITION);
  return (
    <Style>
      {transitions.map(({ item: m, key, props: style }) => {
        if (m) {
          return (
            <MusicInfo
              key={key}
              style={style}
              music={m}
              onViewMusic={onViewMusic}
            />
          );
        }
        return <Skeleton key={key} style={style} />;
      })}
    </Style>
  );
};

export default Wrapper;
