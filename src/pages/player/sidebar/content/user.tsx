import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import styled from 'styled-components';

import Avatar, { Shape } from '@/components/avatar';
import { User as UserType } from '@/constants/user';
import useHistory from '@/utils/use_history';
import { PLAYER_PATH } from '@/constants/route';
import ellipsis from '@/style/ellipsis';

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  > .avatar {
    cursor: pointer;
  }

  > .nickname {
    font-size: 14px;
    color: var(--text-color-primary);
    cursor: pointer;

    padding: 0 15px;
    ${ellipsis}

    &:hover {
      color: var(--color-primary);
    }
  }
`;

const User = () => {
  const user = useSelector(
    ({ user: u }: { user: UserType }) => u,
    shallowEqual,
  );

  const history = useHistory();
  const toUserPage = () => history.push({ pathname: PLAYER_PATH.PROFILE });

  return (
    <Style>
      <Avatar
        className="avatar"
        animated
        src={user.avatar}
        size={88}
        shape={Shape.CIRCLE}
        onClick={toUserPage}
      />
      <div className="nickname" onClick={toUserPage}>
        {user.nickname}
      </div>
    </Style>
  );
};

export default User;
