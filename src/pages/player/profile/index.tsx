import React from 'react';
import styled from 'styled-components';
import { useSelector, shallowEqual } from 'react-redux';

import scrollbar from '@/style/scrollbar';
import { User } from '@/constant/user';
import { routeContainerStyle } from '../style';
import Avatar from './avatar';
import TextField from './text_field';

const Style = styled.div`
  ${routeContainerStyle}
  ${scrollbar}
  overflow: auto;
  padding: 20px;
`;

const Profile = () => {
  const user = useSelector(({ user: u }: { user: User }) => u, shallowEqual);
  return (
    <Style>
      <Avatar user={user} />
      <TextField user={user} />
    </Style>
  );
};

export default React.memo(Profile);
