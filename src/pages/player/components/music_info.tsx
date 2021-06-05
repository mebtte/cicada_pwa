import React, { useCallback } from 'react';
import styled from 'styled-components';

import ellipsis from '@/style/ellipsis';
import { Music as MusicType } from '@/constants/music';
import Avatar from '@/components/avatar';
import eventemitter, { Type as EventType } from '../eventemitter';
import Singer from './singer';

const Style = styled.div`
  display: flex;
  align-items: center;
  > .info {
    margin-left: 10px;
    flex: 1;
    min-width: 0;
    > .name {
      ${ellipsis}
      width: 100%;
      text-align: left;
      font-size: 14px;
      cursor: pointer;
      border: none;
      outline: none;
      padding: 0;
      margin: 0;
      background-color: transparent;
      color: rgb(55 55 55);
      line-height: 1.5;
    }
    > .singers {
      ${ellipsis}
      font-size: 12px;
      color: rgb(155 155 155);
    }
  }
`;
const COVER_SIZE = 40;
const COVER_STYLE = {
  cursor: 'pointer',
};

const MusicInfo = ({
  music,
  ...props
}: {
  music: MusicType;
  [key: string]: any;
}) => {
  const onViewMusic = useCallback(
    () => eventemitter.emit(EventType.OPEN_MUSIC_DRAWER, music),
    [music],
  );
  const { cover, name, singers } = music;
  return (
    <Style {...props}>
      <Avatar
        style={COVER_STYLE}
        animated
        src={cover}
        size={COVER_SIZE}
        onClick={onViewMusic}
      />
      <div className="info">
        <button type="button" className="name " onClick={onViewMusic}>
          {name}
        </button>
        <div className="singers ">
          {singers.length ? (
            singers.map((s) => <Singer key={s.id} singer={s} />)
          ) : (
            <Singer />
          )}
        </div>
      </div>
    </Style>
  );
};

export default MusicInfo;
