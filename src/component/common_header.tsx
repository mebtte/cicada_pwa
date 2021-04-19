import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ROOT_PATH } from '@/constant/route';
import { CONTENT_MAX_WIDTH } from '@/constant';

const Style = styled.div`
  box-shadow: 0px 2px 4px -1px rgba(49, 194, 124, 0.2),
    0px 4px 5px 0px rgba(49, 194, 124, 0.14),
    0px 1px 10px 0px rgba(49, 194, 124, 0.12);
  > .content {
    max-width: ${CONTENT_MAX_WIDTH}px;
    width: 100%;
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
      > .link {
        font-size: 14px;
        color: rgba(49, 194, 124, 0.5);
        transition: all 0.3s;
        text-decoration: none;
        margin-right: 30px;
        &:hover {
          color: rgba(49, 194, 124, 1);
        }
      }
      > .player {
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
  return (
    <Style>
      <div className="content">
        <Link className="logo" to={ROOT_PATH.HOME}>
          <img className="image" src="/logo.png" alt="logo" />
          <img className="text" src="/text_logo.png" alt="logo" />
        </Link>
        <div className="rest">
          <Link className="link" to={ROOT_PATH.ABOUT}>
            关于
          </Link>
          <Link className="player" to={ROOT_PATH.PLAYER}>
            进入播放器
          </Link>
        </div>
      </div>
    </Style>
  );
};

export default CommonHeader;
