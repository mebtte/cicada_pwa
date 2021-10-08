import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import styled from 'styled-components';

import AnimateCover, { Shape } from '@/components/animate_cover';
import { User as UserType } from '@/constants/user';
import ellipsis from '@/style/ellipsis';
import globalEventemitter, {
  EventType as GlobalEventType,
} from '@/platform/global_eventemitter';

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  > .avatar {
    cursor: pointer;
    border: 1px solid var(--color-primary);
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
const openProfileDialog = () =>
  globalEventemitter.emit(GlobalEventType.OPEN_PROFILE_DIALOG, {});

const User = () => {
  const user = useSelector(
    ({ user: u }: { user: UserType }) => u,
    shallowEqual,
  );

  return (
    <Style>
      <AnimateCover
        className="avatar"
        src={user.avatar}
        alt="avatar"
        size={88}
        shape={Shape.CIRCLE}
        onClick={openProfileDialog}
      />
      <div className="nickname" onClick={openProfileDialog}>
        {user.nickname}
      </div>
    </Style>
  );
};

export default User;
