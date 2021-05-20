import React from 'react';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';

import { Music } from '@/constant/music';
import styledScrollbar from '@/style/styled_scrollbar';
import Avatar from '@/components/avatar';
import Singer from '../component/singer';

const COVER_SIZE = 240;
const TRANSITION = {
  from: { opacity: 0, transform: 'translateY(-100%)' },
  enter: { opacity: 1, transform: 'translateY(0%)' },
  leave: { opacity: 0, transform: 'translateY(100%)' },
};
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
  // @ts-ignore
  const transitions = useTransition(music, (m) => m.id, TRANSITION);
  return (
    <Style>
      <Avatar animated src={music.cover} size={COVER_SIZE} />
      <div className="info-wrapper">
        {transitions.map(({ key, props: style, item: m }) => {
          const { name, singers } = m;
          return (
            <animated.div key={key} style={style} className="info">
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
