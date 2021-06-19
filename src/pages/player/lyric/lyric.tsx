import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

import useOpen from './use_open';
import { Music } from '../constants';
import Action from './action';
import Background from './background';

const Style = styled(animated.div)`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Lyric = ({
  music,
  onClose,
  style,
}: {
  music: Music;
  onClose: () => void;
  style: unknown;
}) => {
  return (
    <Style style={style}>
      <Background cover={music.cover} />
      <Action onClose={onClose} />
    </Style>
  );
};

const Wrapper = ({ music }: { music: Music }) => {
  const { open, onClose } = useOpen();
  const transitions = useTransition(open, {
    from: { transform: 'translateY(100%)', opacity: 0 },
    enter: { transform: 'translateY(0%)', opacity: 1 },
    leave: { transform: 'translateY(100%)', opacity: 0 },
  });
  return transitions((style, o) =>
    o ? <Lyric music={music} onClose={onClose} style={style} /> : null,
  );
};

export default Wrapper;
