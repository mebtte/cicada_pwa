import React, { useState, useEffect, useCallback } from 'react';

import { NAME_MAX_LENGTH } from '../../../../constant/figure';
import logger from '../../../../platform/logger';
import toast from '../../../../platform/toast';
import createFigure from '../../../../api/create_figure';
import eventemitter, { Type as EventType } from './eventemitter';
import Dialog, { Title, Content, Action } from '../../../../component/dialog';
import Button, { Type } from '../../../../component/button';
import Input from '../../../../component/input';

const inputStyle = {
  display: 'block',
  width: '100%',
};
const buttonStyle = {
  marginLeft: 20,
};

const CreateDialog = () => {
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => setOpen(false), []);

  const [name, setName] = useState('');
  const onNameChange = useCallback((event) => setName(event.target.value), []);

  const [loading, setLoading] = useState(false);
  const onCreate = async () => {
    setLoading(true);
    try {
      await createFigure(name);
      eventemitter.emit(EventType.FIGURE_CREATED);
      toast.success(`已创建角色"${name}"`);
      onClose();
    } catch (error) {
      logger.error(error, {
        description: '创建角色失败',
        report: true,
      });
      toast.error(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    const openListener = () => setOpen(true);
    eventemitter.on(EventType.OPEN_CREATE_DIALOG, openListener);
    return () =>
      void eventemitter.off(EventType.OPEN_CREATE_DIALOG, openListener);
  }, []);

  return (
    <Dialog open={open}>
      <Title>创建角色</Title>
      <Content>
        <Input
          value={name}
          onChange={onNameChange}
          placeholder="输入角色名字"
          style={inputStyle}
          disabled={loading}
          maxLength={NAME_MAX_LENGTH}
        />
      </Content>
      <Action>
        <Button
          label="取消"
          size={32}
          style={buttonStyle}
          onClick={onClose}
          disabled={loading}
        />
        <Button
          label="创建"
          size={32}
          style={buttonStyle}
          type={Type.PRIMARY}
          disabled={!name}
          loading={loading}
          onClick={onCreate}
        />
      </Action>
    </Dialog>
  );
};

export default CreateDialog;
