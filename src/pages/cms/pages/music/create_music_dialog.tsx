import React from 'react';

import useHistory from '@/utils/use_history';
import Dialog, { Title, Action } from '@/components/dialog';
import Button, { Type } from '@/components/button';
import useQuery from '@/utils/use_query';
import { Query } from './constants';

const CreateMusicDialog = () => {
  const history = useHistory();
  const query = useQuery<{ [key in Query]?: string }>();
  const open = !!query[Query.CREATE_MUSIC_DIALOG_OPEN];
  const onClose = () => {
    history.push({
      query: {
        [Query.CREATE_MUSIC_DIALOG_OPEN]: '',
      },
    });
    setTimeout(() => {}, 1000);
  };

  return (
    <Dialog open={open}>
      <Title>创建音乐</Title>
      <Action>
        <Button label="取消" onClick={onClose} />
        <Button label="创建" type={Type.PRIMARY} onClick={onClose} />
      </Action>
    </Dialog>
  );
};

export default CreateMusicDialog;
