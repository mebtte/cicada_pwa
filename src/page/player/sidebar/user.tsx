import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { PLAYER_PATH } from '@/constant/route';
import { User as UserType } from '@/constant/user';
import Avatar, { Shape } from '@/component/avatar';

const AVATAR_SIZE = 100;
const Style = styled.div`
  margin: 50px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  > .avatar-container {
    > .avatar {
      cursor: pointer;
      border: 4px solid rgb(49 194 124 / 0.5);
    }
  }
  > .name {
    font-size: 14px;
    margin-top: 10px;
    color: rgb(55 55 55);
  }
`;

const User = () => {
  const { user } = useSelector(({ user: u }: { user: UserType }) => ({
    user: u,
  }));

  return (
    <Style>
      <Link className="avatar-container" to={PLAYER_PATH.PROFILE}>
        <Avatar
          className="avatar"
          animated
          src={user.avatar}
          size={AVATAR_SIZE}
          shape={Shape.CIRCLE}
        />
      </Link>
      <div className="name">{user.nickname}</div>
    </Style>
  );
};

export default User;
