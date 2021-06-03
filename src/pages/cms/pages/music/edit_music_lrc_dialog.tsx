import React, { useRef, useCallback, useEffect, useState } from 'react';

import cmsUdpateMusic, { Key } from '@/apis/cms_update_music';
import dialog from '@/platform/dialog';
import ErrorCard from '@/components/error_card';
import Textarea from '@/components/textarea';
import logger from '@/platform/logger';
import getLrcRequest from '@/apis/get_lrc';
import Button, { Type } from '@/components/button';
import Dialog, { Title, Content, Action } from '@/components/dialog';
import { Music } from './constants';
import eventemitter, { EventType } from './eventemitter';

const textareaStyle: React.CSSProperties = {
  width: '100%',
  height: '350px',
  resize: 'vertical',
};
const errorCardStyle: React.CSSProperties = {
  padding: '50px 0',
};
const bodyProps = {
  style: { width: 720 },
};

const EditMusicLrcDialog = () => {
  const [music, setMusic] = useState<Music>(null);

  const originalLrcRef = useRef('');

  const [lrc, setLrc] = useState('');
  const onLrcChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setLrc(event.target.value);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<Error | null>(null);
  const getLrc = useCallback(async () => {
    if (!music) {
      return;
    }
    setError(null);
    setLoading(true);
    setLrc('获取歌词中...');
    try {
      const l = await getLrcRequest(music.id);
      originalLrcRef.current = l;
      setLrc(l);
    } catch (e) {
      logger.error(e, { description: '获取歌词失败', report: true });
      setError(e);
    }
    setLoading(false);
  }, [music]);

  const onClose = () => {
    setMusic(null);
    setTimeout(() => {
      setLrc('');
    }, 1000);
  };
  const onUpdate = async () => {
    setLoading(true);
    try {
      await cmsUdpateMusic({ id: music.id, key: Key.LRC, value: lrc });
      onClose();
    } catch (e) {
      logger.error(e, { description: '更新音乐 lrc 失败', report: true });
      dialog.alert({ title: '更新歌词失败', content: error.message });
    }
    setLoading(false);
  };

  useEffect(() => {
    const openListener = (m: Music) => setMusic(m);
    eventemitter.on(EventType.OPEN_EDIT_MUSIC_LRC_DIALOG, openListener);
    return () =>
      void eventemitter.off(EventType.OPEN_EDIT_MUSIC_LRC_DIALOG, openListener);
  }, []);

  useEffect(() => {
    getLrc();
  }, [getLrc]);

  return (
    <Dialog open={!!music} bodyProps={bodyProps}>
      <Title>{music ? `编辑"${music.name}"歌词` : '编辑音乐歌词'}</Title>
      <Content>
        {error ? (
          <ErrorCard
            style={errorCardStyle}
            errorMessage={error.message}
            retry={getLrc}
          />
        ) : (
          <Textarea
            value={lrc}
            onChange={onLrcChange}
            placeholder="输入歌词"
            disabled={loading}
            rows={15}
            style={textareaStyle}
          />
        )}
      </Content>
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

export default React.memo(EditMusicLrcDialog);
