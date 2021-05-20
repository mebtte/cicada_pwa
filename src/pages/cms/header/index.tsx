import React from 'react';
import styled from 'styled-components';
import { useSelector, shallowEqual } from 'react-redux';

import { User } from '@/constant/user';
import Avatar from '@/component/avatar';

const Style = styled.div`
  z-index: 1;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  > .blank {
    flex: 1;
  }
`;

const Header = () => {
  const user = useSelector(({ user: u }: { user: User }) => u, shallowEqual);
  return (
    <Style>
      <div className="blank" />
      <Avatar animated src={user.avatar} />
    </Style>
  );
};

export default Header;
