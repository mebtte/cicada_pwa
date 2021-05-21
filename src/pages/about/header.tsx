import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';

import Button, { Type } from '@/components/button';
import { User } from '@/constants/user';
import { ROOT_PATH } from '@/constants/route';

const Style = styled.div`
  box-shadow: 0px 2px 4px -1px rgba(49, 194, 124, 0.2),
    0px 4px 5px 0px rgba(49, 194, 124, 0.14),
    0px 1px 10px 0px rgba(49, 194, 124, 0.12);
  > .content {
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
      gap: 20px;
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
          <Button label="播放器" type={Type.PRIMARY} />
          {user && user.cms ? <Button label="CMS" type={Type.PRIMARY} /> : null}
        </div>
      </div>
    </Style>
  );
};

export default CommonHeader;
