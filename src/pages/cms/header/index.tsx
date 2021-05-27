import React from 'react';
import styled from 'styled-components';
import { useSelector, shallowEqual } from 'react-redux';

import { User } from '@/constants/user';
import Avatar from '@/components/avatar';
import globalEentemitter, { EventType } from '@/platform/global_eventemitter';

const Style = styled.div`
  z-index: 1;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 2px #f6f6f6;
  > .blank {
    flex: 1;
  }
`;
const avatarStyle = {
  cursor: 'pointer',
};
const openProfileDialog = () =>
  globalEentemitter.emit(EventType.OPEN_PROFILE_DIALOG);

const Header = () => {
  const user = useSelector(({ user: u }: { user: User }) => u, shallowEqual);
  return (
    <Style>
      <div className="blank" />
      <Avatar
        animated
        src={user.avatar}
        onClick={openProfileDialog}
        style={avatarStyle}
      />
    </Style>
  );
};

export default Header;
