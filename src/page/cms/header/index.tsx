import React from 'react';
import styled from 'styled-components';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';

import { ROOT_PATH } from '@/constant/route';
import { User } from '@/constant/user';
import Avatar from '@/component/avatar';

const Style = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  > .blank {
    flex: 1;
  }
  > .logo {
    display: flex;
    align-items: center;
    > .icon {
      height: 36px;
    }
    > .text {
      height: 24px;
      margin-left: 10px;
    }
  }
`;

const Header = () => {
  const user = useSelector(({ user: u }: { user: User }) => u, shallowEqual);
  return (
    <Style>
      <Link className="logo" to={ROOT_PATH.HOME}>
        <img className="icon" src="/logo.png" alt="logo" />
        <img className="text" src="/text_logo.png" alt="logo" />
      </Link>
      <div className="blank" />
      <Avatar animated src={user.avatar} />
    </Style>
  );
};

export default Header;
