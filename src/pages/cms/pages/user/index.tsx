import React from 'react';
import styled from 'styled-components';

import { cmsPage } from '../../style';
import UpdateDialog from './update_dialog';
import UserList from './user_list';
import Action from './action';

const Style = styled.div`
  ${cmsPage};
  display: flex;
`;

const User = () => (
  <Style>
    <Action />
    <UserList />

    <UpdateDialog />
  </Style>
);

export default User;
