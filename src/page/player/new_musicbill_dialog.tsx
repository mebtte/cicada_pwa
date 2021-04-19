import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { easeCubicInOut } from 'd3-ease';

import { PLAYER_PATH } from '@/constant/route';
import { NAME } from '@/constant/musicbill';
import toast from '@/platform/toast';
import logger from '@/platform/logger';
import createMusicbill from '@/api/create_musicbill';
import dialog from '@/platform/dialog';
import Dialog, { Title, Content, Action } from '@/component/dialog';
import Button, { Type } from '@/component/button';
import Input from '@/component/input';
import eventemitter, { Type as EventType } from './eventemitter';

const DIALOG_TRANSITION_DURATION = 650;

const springConfig = {
  duration: DIALOG_TRANSITION_DURATION,
  easing: easeCubicInOut,
};
const buttonStyle = {
  marginLeft: 20,
};
const inputStyle = {
  display: 'block',
  width: '100%',
};

const NewMusicbillDialog = () => {
  const history = useHistory();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [creating, setCreating] = useState(false);
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => {
    inputRef.current.value = '';
    setOpen(false);
  }, []);
  const onCreate = async () => {
    const name = inputRef.current.value;
    if (name.length < NAME.MIN_LENGTH) {
      return toast.error(`"歌单名字"长度应大于等于${NAME.MIN_LENGTH}`);
    }
    if (name.length > NAME.MAX_LENGTH) {
      return toast.error(`"歌单名字"长度应小于等于${NAME.MAX_LENGTH}`);
    }
    setCreating(true);
    try {
      const musicbill = await createMusicbill(name);
      toast.success(`已创建歌单"${musicbill.name}"`);
      eventemitter.emit(EventType.ADD_MUSICBILL, musicbill);
      onClose();
      setTimeout(
        () => history.push(PLAYER_PATH.MUSICBILL.replace(':id', musicbill.id)),
        0,
      );
    } catch (error) {
      logger.error(error, { description: '创建歌单失败', report: true });
      dialog.alert({
        title: '创建歌单失败',
        content: error.message,
      });
    }
    setCreating(false);
  };

  useEffect(() => {
    const listener = () => {
      setOpen(true);
      setTimeout(
        () => inputRef.current && inputRef.current.focus(),
        DIALOG_TRANSITION_DURATION,
      );
    };
    eventemitter.on(EventType.OPEN_CREATE_MUSICBILL_DIALOG, listener);
    return () =>
      eventemitter.off(EventType.OPEN_CREATE_MUSICBILL_DIALOG, listener);
  }, []);

  return (
    <Dialog open={open} springConfig={springConfig}>
      <Title>创建歌单</Title>
      <Content>
        <Input
          ref={inputRef}
          type="text"
          style={inputStyle}
          placeholder="歌单名字"
          disabled={creating}
        />
      </Content>
      <Action>
        <Button
          label="取消"
          onClick={onClose}
          disabled={creating}
          style={buttonStyle}
          size={32}
        />
        <Button
          label="创建"
          onClick={onCreate}
          loading={creating}
          style={buttonStyle}
          size={32}
          type={Type.PRIMARY}
        />
      </Action>
    </Dialog>
  );
};

export default React.memo(NewMusicbillDialog);
