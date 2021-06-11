import React, { useCallback } from 'react';
import styled from 'styled-components';

import Tag, { Type as TagType } from '@/components/tag';
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
    > .top {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 3px;
      > .name {
        ${ellipsis}
        font-size: 14px;
        cursor: pointer;
        color: rgb(55 55 55);
        &:hover {
          color: rgb(0 0 0);
        }
      }
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
  const { cover, name, singers, hq, ac, mvLink, forkFrom } = music;
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
        <div className="top">
          <div className="name" onClick={onViewMusic}>
            {name}
          </div>
          {hq ? <Tag type={TagType.HQ} /> : null}
          {ac ? <Tag type={TagType.AC} /> : null}
          {mvLink ? <Tag type={TagType.MV} /> : null}
          {forkFrom.length ? <Tag type={TagType.FORK_FROM} /> : null}
        </div>
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
