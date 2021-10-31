import React from 'react';
import styled from 'styled-components';

import { Music } from '../../constants';
import Singer from '../../components/singer';

const Style = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  > .left {
    > .name {
      font-size: 14px;
      color: var(--text-color-primary);
      cursor: pointer;

      &.empty {
        cursor: unset;
      }
    }

    > .singer-list {
      margin-left: 5px;

      font-size: 12px;
    }
  }
`;

const Info = ({ music }: { music: Music | null }) => {
  const onViewMusic = () => {};
  return (
    <Style>
      <div className="left">
        {music ? (
          <>
            <span className="name">{music.name}</span>
            <span className="singer-list">
              {music.singers.length ? (
                music.singers.map((s) => <Singer key={s.id} singer={s} />)
              ) : (
                <Singer />
              )}
            </span>
          </>
        ) : (
          <span className="name empty">知了</span>
        )}
      </div>
    </Style>
  );
};

export default Info;
