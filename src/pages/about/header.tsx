import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';

import { User } from '@/constants/user';
import { ROOT_PATH } from '@/constants/route';

const Style = styled.div`
  box-shadow: 0px 2px 4px -1px rgba(49, 194, 124, 0.2),
    0px 4px 5px 0px rgba(49, 194, 124, 0.14),
    0px 1px 10px 0px rgba(49, 194, 124, 0.12);
  > .content {
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0 20px;
    > .logo {
      padding: 20px 0;
      text-decoration: none;
      > .image {
        vertical-align: middle;
        height: 30px;
      }
      > .text {
        vertical-align: middle;
        margin-left: 15px;
        height: 22px;
      }
    }
    > .rest {
      flex: 1;
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      > .action {
        margin-left: 10px;
        color: white;
        background-color: rgba(49, 194, 124, 0.5);
        padding: 8px 18px;
        border-radius: 2px;
        text-decoration: none;
        font-size: 12px;
        transition: all 0.3s;
        &:hover {
          background-color: rgba(49, 194, 124, 1);
        }
      }
    }
  }
`;

const CommonHeader = () => {
  const user = useSelector(
    (state: { user: User | null }) => state.user,
    shallowEqual,
  );
  return (
    <Style>
      <div className="content">
        <Link className="logo" to={ROOT_PATH.HOME}>
          <img className="image" src="/logo.png" alt="logo" />
          <img className="text" src="/text_logo.png" alt="logo" />
        </Link>
        <div className="rest">
          <Link className="action" to={ROOT_PATH.PLAYER}>
            前往播放器
          </Link>
          {user && user.cms ? (
            <Link className="action" to={ROOT_PATH.CMS}>
              前往 CMS
            </Link>
          ) : null}
        </div>
      </div>
    </Style>
  );
};

export default CommonHeader;
