import React from 'react';
import styled from 'styled-components';

import AnimateCover, { Shape } from '@/components/animate_cover';
import { Musicbill } from '../constants';
import Container from './container';
import { COVER_SIZE, AVATAR_SIZE } from './constants';
import playerEventemitter, {
  EventType as PlayerEventType,
} from '../../../eventemitter';

const pointer = {
  cursor: 'pointer',
};
const Nickname = styled.span`
  cursor: pointer;
  color: inherit;
  &:hover {
    color: #000;
  }
`;

const Top = ({ musicbill }: { musicbill: Musicbill }) => {
  const { cover, name, user, description } = musicbill;
  const onViewUser = () =>
    playerEventemitter.emit(PlayerEventType.OPEN_USER_DRAWER, { id: user.id });
  return (
    <Container>
      <AnimateCover src={cover} size={COVER_SIZE} alt="cover" />
      <div className="info">
        <div className="name" title={name}>
          {name}
        </div>
        {description ? (
          <div className="description" title={description}>
            {description}
          </div>
        ) : null}
        <div className="user">
          <AnimateCover
            src={user.avatar}
            size={AVATAR_SIZE}
            shape={Shape.CIRCLE}
            onClick={onViewUser}
            style={pointer}
            alt="avatar"
          />
          <div className="name" title={user.nickname}>
            <Nickname onClick={onViewUser}>{user.nickname}</Nickname>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Top;
