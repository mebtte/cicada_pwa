import React from 'react';
import styled from 'styled-components';

import { User as UserType } from '@/constants/user';
import Avatar, { Shape } from '@/components/avatar';
import globalEventemitter, { EventType } from '@/platform/global_eventemitter';

const AVATAR_SIZE = 100;
const Style = styled.div`
  margin: 50px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  > .avatar {
    cursor: pointer;
    border: 4px solid rgb(49 194 124 / 0.5);
  }
  > .nickname {
    font-size: 14px;
    margin-top: 10px;
    color: rgb(55 55 55);
  }
`;
const openProfileDialog = () =>
  globalEventemitter.emit(EventType.OPEN_PROFILE_DIALOG);

const User = ({ user }: { user: UserType }) => (
  <Style>
    <Avatar
      className="avatar"
      animated
      src={user.avatar}
      size={AVATAR_SIZE}
      shape={Shape.CIRCLE}
      onClick={openProfileDialog}
    />
    <div className="nickname">{user.nickname}</div>
  </Style>
);

export default User;
