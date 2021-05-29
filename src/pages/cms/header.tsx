import React from 'react';
import styled from 'styled-components';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';

import Tooltip, { Placement } from '@/components/tooltip';
import IconButton, { Name } from '@/components/icon_button';
import { User } from '@/constants/user';
import Avatar from '@/components/avatar';
import globalEentemitter, { EventType } from '@/platform/global_eventemitter';
import { ROOT_PATH } from '@/constants/route';

const Style = styled.div`
  z-index: 1;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 2px #f6f6f6;
  gap: 20px;
  > .blank {
    flex: 1;
  }
`;
const avatarStyle = {
  cursor: 'pointer',
  marginLeft: 20,
};
const openProfileDialog = () =>
  globalEentemitter.emit(EventType.OPEN_PROFILE_DIALOG);

const Header = () => {
  const user = useSelector(({ user: u }: { user: User }) => u, shallowEqual);
  return (
    <Style>
      <div className="blank" />
      <Tooltip title="首页" placement={Placement.BOTTOM}>
        <Link to={ROOT_PATH.HOME}>
          <IconButton name={Name.HOUSE_OUTLINE} />
        </Link>
      </Tooltip>
      <Tooltip title="播放器" placement={Placement.BOTTOM}>
        <Link to={ROOT_PATH.PLAYER}>
          <IconButton name={Name.EARPHONE_OUTLINE} />
        </Link>
      </Tooltip>
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
