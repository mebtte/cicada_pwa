import React, { useEffect, useState } from 'react';

import cmsCreateFigure from '@/api/cms_create_figure';
import logger from '@/platform/logger';
import toast from '@/platform/toast';
import { NAME_MAX_LENGTH } from '@/constant/figure';
import Button, { Type } from '@/component/button';
import TextField from '@/component/text_field';
import Dialog, { Title, Content, Action } from '@/component/dialog';
import eventemitter, { EventType } from './eventemitter';

const CreateFigureDialog = () => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const onClose = () => {
    setOpen(false);
    setTimeout(() => setName(''), 1000);
  };

  const [loading, setLoading] = useState(false);
  const onCreate = async () => {
    if (!name) {
      return toast.error('请输入角色名字');
    }
    setLoading(true);
    try {
      await cmsCreateFigure(name);
      toast.success(`角色"${name}"已创建`);
      onClose();
      eventemitter.emit(EventType.FIGURE_CREATED);
    } catch (error) {
      logger.error(error, { description: '创建角色失败' });
      toast.error(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    const openListener = () => setOpen(true);
    eventemitter.on(EventType.OPEN_CREATE_FIGURE_DIALOG, openListener);
    return () =>
      void eventemitter.off(EventType.OPEN_CREATE_FIGURE_DIALOG, openListener);
  }, []);

  return (
    <Dialog open={open}>
      <Title>创建角色</Title>
      <Content>
        <TextField
          label="角色名字"
          inputProps={{
            value: name,
            onChange: onNameChange,
            placeholder: `角色名字不超过${NAME_MAX_LENGTH}个字符`,
            maxLength: NAME_MAX_LENGTH,
          }}
        />
      </Content>
      <Action>
        <Button label="取消" onClick={onClose} disabled={loading} />
        <Button
          label="创建"
          type={Type.PRIMARY}
          onClick={onCreate}
          loading={loading}
        />
      </Action>
    </Dialog>
  );
};

export default CreateFigureDialog;
