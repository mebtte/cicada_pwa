import React from 'react';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';

import { Music } from '@/constants/music';
import styledScrollbar from '@/style/styled_scrollbar';
import Avatar from '@/components/avatar';
import Singer from '../components/singer';

const COVER_SIZE = 240;
const Style = styled.div`
  box-sizing: border-box;
  width: ${COVER_SIZE}px;
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > .info-wrapper {
    position: relative;
    margin: 15px 0 40px 0;
    > .info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      > .name {
        font-size: 22px;
        margin-bottom: 5px;
      }
      > .singers {
        ${styledScrollbar}
        overflow: auto;
        white-space: nowrap;
        font-size: 14px;
        padding-bottom: 5px;
      }
    }
  }
`;

const Info = ({ music }: { music: Music }) => {
  const transitions = useTransition(music, {
    from: { opacity: 0, transform: 'translate(0, -100%)' },
    enter: { opacity: 1, transform: 'translate(0, 0%)' },
    leave: { opacity: 0, transform: 'translate(0, 100%)' },
  });
  return (
    <Style>
      <Avatar animated src={music.cover} size={COVER_SIZE} />
      <div className="info-wrapper">
        {transitions((style, m) => {
          const { name, singers } = m;
          return (
            <animated.div style={style} className="info">
              <div className="name">{name}</div>
              <div className="singers">
                {singers.length ? (
                  singers.map((s) => <Singer key={s.id} singer={s} />)
                ) : (
                  <Singer />
                )}
              </div>
            </animated.div>
          );
        })}
      </div>
    </Style>
  );
};

export default Info;
