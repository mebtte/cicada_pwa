import React, { useCallback } from 'react';
import styled from 'styled-components';

import { Figure } from '@/constants/figure';
import eventemitter, { Type as EventType } from '../../eventemitter';

const Style = styled.span`
  &::after {
    content: '|';
    color: rgb(222 222 222);
    margin: 0 2px;
  }
  &:last-child::after {
    content: '';
    margin: 0;
  }
  > .singer {
    font-size: inherit;
    cursor: pointer;
    color: rgb(155 155 155);
    transition: all 300ms;
    &.unknown {
      color: rgb(155 155 155) !important;
      cursor: not-allowed;
    }
    &:hover {
      color: rgb(55 55 55);
    }
  }
`;

const Singer = ({ singer }: { singer?: Figure }) => {
  const onViewSinger = useCallback(
    () => eventemitter.emit(EventType.OPEN_SINGER_DRAWER, singer),
    [singer],
  );
  return (
    <Style>
      {singer ? (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
        <span className="singer" onClick={onViewSinger}>
          {singer.name}
        </span>
      ) : (
        <span className="singer unknown">未知歌手</span>
      )}
    </Style>
  );
};

export default Singer;
