import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import globalEventemitter, { EventType } from '@/platform/global_eventemitter';
import { GITHUB_REPOSITORY } from '@/constants';
import { ROOT_PATH } from '@/constants/route';
import Avatar from '@/components/avatar';
import { User } from '@/constants/user';
import Button from '@/components/button';
import IconButton, { Name } from '@/components/icon_button';
import Tooltip, { Placement } from '@/components/tooltip';
import { CONTENT_MAX_WIDTH } from './constants';

const ACTION_SIZE = 36;
const Style = styled.header`
  border-bottom: 1px solid #d9d9d9;
  background-color: #fff;
  > .content {
    max-width: ${CONTENT_MAX_WIDTH}px;
    height: 80px;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    > .logo {
      display: flex;
      align-items: center;
      gap: 20px;
      user-select: none;
      > .icon-logo {
        height: 56px;
      }
      > .text-logo {
        height: 36px;
      }
    }
    > .right {
      flex: 1;
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 20px;
    }
  }
`;
const avatarStyle = {
  marginLeft: 40,
  cursor: 'pointer',
};
const openProfileDialog = () =>
  globalEventemitter.emit(EventType.OPEN_PROFILE_DIALOG);

const Header = ({ user }: { user: User | null }) => (
  <Style>
    <div className="content">
      <div className="logo">
        <img className="icon-logo" src="/logo.png" alt="logo" />
        <img className="text-logo" src="/text_logo.png" alt="logo" />
      </div>
      <div className="right">
        <Tooltip title="Github" placement={Placement.BOTTOM}>
          <a href={GITHUB_REPOSITORY}>
            <IconButton name={Name.GITHUB_FILL} size={ACTION_SIZE} />
          </a>
        </Tooltip>
        {user ? (
          <>
            <Tooltip title="CMS" placement={Placement.BOTTOM}>
              <Link to={ROOT_PATH.CMS}>
                <IconButton name={Name.CMS_OUTLINE} size={ACTION_SIZE} />
              </Link>
            </Tooltip>
            <Tooltip title="播放器" placement={Placement.BOTTOM}>
              <Link to={ROOT_PATH.PLAYER}>
                <IconButton name={Name.EARPHONE_OUTLINE} size={ACTION_SIZE} />
              </Link>
            </Tooltip>
          </>
        ) : (
          <Button label="登录" size={ACTION_SIZE} />
        )}
      </div>
      {user ? (
        <Avatar
          src={user.avatar}
          animated
          size={48}
          style={avatarStyle}
          onClick={openProfileDialog}
        />
      ) : null}
    </div>
  </Style>
);

export default Header;
