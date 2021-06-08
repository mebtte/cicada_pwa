import React, { useEffect, useState } from 'react';

import Button, { Type } from '@/components/button';
import Dialog, { Title, Content, Action } from '@/components/dialog';
import { Music } from './constants';
import eventemitter, { EventType } from './eventemitter';

const EditForkFromDialog = () => {
  const [music, setMusic] = useState<null | Music>(null);
  const onClose = () => {
    setMusic(null);
    setTimeout(() => {}, 0);
  };

  const [loading, setLoading] = useState(false);
  const onUpdate = () => {
    setLoading(true);
  };

  useEffect(() => {
    const openListener = (m: Music) => setMusic(m);
    eventemitter.on(EventType.OPEN_EDIT_FORK_FROM_DIALOG, openListener);
    return () =>
      void eventemitter.off(EventType.OPEN_EDIT_FORK_FROM_DIALOG, openListener);
  }, []);

  return (
    <Dialog open={!!music}>
      <Title>{music ? `"${music.name}"` : ''}翻唱自</Title>
      <Content>fork from</Content>
      <Action>
        <Button label="取消" onClick={onClose} disabled={loading} />
        <Button
          label="更新"
          type={Type.PRIMARY}
          onClick={onUpdate}
          loading={loading}
        />
      </Action>
    </Dialog>
  );
};

export default EditForkFromDialog;
