import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

import Avatar from '@/components/avatar';
import { Figure } from '../constants';

const COVER_SIZE = 200;

const Style = styled.div`
  position: relative;
  height: ${COVER_SIZE}px;
  margin: 20px;
`;
const AnimatedDiv = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  > .info {
    flex: 1;
    min-width: 0;
    margin-right: 20px;
    > .name {
      font-size: 36px;
      color: rgb(55 55 55);
    }
    > .alias {
      font-size: 14px;
      margin-top: 10px;
      color: rgb(155 155 155);
    }
  }
`;

const SingerInfo = ({ singer }: { singer: Figure }) => {
  const transitions = useTransition(singer, {
    from: { opacity: 0, transform: 'translate(100%)' },
    enter: { opacity: 1, transform: 'translate(0%)' },
    leave: { opacity: 0, transform: 'translate(-100%)' },
  });
  return (
    <Style>
      {transitions((style, s) => (
        <AnimatedDiv style={style}>
          <div className="info">
            <div className="name">{s.name}</div>
            <div className="alias">{s.alias}</div>
          </div>
          <Avatar animated src={s.avatar} size={COVER_SIZE} />
        </AnimatedDiv>
      ))}
    </Style>
  );
};

export default SingerInfo;
