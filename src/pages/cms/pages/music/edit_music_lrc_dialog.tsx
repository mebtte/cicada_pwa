import React, { useEffect, useState } from 'react';

import Button, { Type } from '@/components/button';
import Dialog, { Title, Content, Action } from '@/components/dialog';
import { Music } from './constants';
import eventemitter, { EventType } from './eventemitter';

const EditMusicLrcDialog = () => {
  const [music, setMusic] = useState<Music>(null);

  const onClose = () => {
    setMusic(null);
    setTimeout(() => {}, 1000);
  };

  useEffect(() => {
    const openListener = (m: Music) => setMusic(m);
    eventemitter.on(EventType.OPEN_EDIT_MUSIC_LRC_DIALOG, openListener);
    return () =>
      void eventemitter.off(EventType.OPEN_EDIT_MUSIC_LRC_DIALOG, openListener);
  }, []);

  return (
    <Dialog open={!!music}>
      <Title>{music ? `编辑"${music.name}"歌词` : '编辑音乐歌词'}</Title>
      <Content>lrc</Content>
      <Action>
        <Button label="取消" onClick={onClose} />
        <Button label="更新" type={Type.PRIMARY} onClick={onClose} />
      </Action>
    </Dialog>
  );
};

export default React.memo(EditMusicLrcDialog);
