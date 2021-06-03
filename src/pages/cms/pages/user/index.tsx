import React from 'react';
import styled from 'styled-components';

import useQuery from '@/utils/use_query';
import { cmsPage } from '../../style';
import UpdateDialog from './update_dialog';
import UserList from './user_list';
import Action from './action';
import { Query } from './constants';
import CreateDialog from './create_dialog';

const Style = styled.div`
  ${cmsPage};
  display: flex;
`;

const User = () => {
  const query = useQuery();
  const createDialogOpen = !!query[Query.CREATE_DIALOG_OPEN];

  return (
    <Style>
      <Action />
      <UserList />

      <CreateDialog open={createDialogOpen} />
      <UpdateDialog />
    </Style>
  );
};

export default User;
