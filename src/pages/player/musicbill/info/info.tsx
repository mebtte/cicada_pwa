import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import ellipsis from '@/style/ellipsis';
import { RequestStatus } from '@/constant';
import { LocalMusicbill } from '@/constant/musicbill';
import Avatar from '@/components/avatar';
import { TOP_CONTENT_HEIGHT } from '../constant';

const Style = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${TOP_CONTENT_HEIGHT}px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  > .info {
    flex: 1;
    min-width: 0;
    margin-left: 20px;
    > .name {
      ${ellipsis}
      font-size: 16px;
      color: rgb(55 55 55);
    }
    > .description {
      ${ellipsis}
      margin: 5px 0;
      font-size: 12px;
      color: rgb(122 122 122);
    }
    > .other {
      margin-top: 3px;
      font-size: 12px;
      color: rgb(155 155 155);
    }
  }
`;

const COVER_SIZE = 70;

const MusicbillInfo = ({
  musicbill,
  ...props
}: {
  musicbill: LocalMusicbill;
  [key: string]: any;
}) => {
  const { status, cover, name, description, createTime, musicList } = musicbill;
  return (
    <Style {...props}>
      <Avatar animated src={cover} size={COVER_SIZE} />
      <div className="info">
        <div className="name">{name}</div>
        {description ? (
          <div className="description" title={description}>
            {description}
          </div>
        ) : null}
        <div className="other">
          {createTime}
          创建
          {status === RequestStatus.SUCCESS
            ? `, ${musicList.length}首音乐`
            : ''}
        </div>
      </div>
    </Style>
  );
};

export default MusicbillInfo;
