import React, { useEffect, useState } from 'react';

import cmsCreateFigure from '@/apis/cms_create_figure';
import logger from '@/platform/logger';
import toast from '@/platform/toast';
import { NAME_MAX_LENGTH } from '@/constants/figure';
import Button, { Type } from '@/components/button';
import Label from '@/components/label';
import Input from '@/components/input';
import Dialog, { Title, Content, Action } from '@/components/dialog';
import eventemitter, { EventType } from './eventemitter';

const inputStyle = {
  width: '100%',
};

const CreateFigureDialog = () => {
  const [name, setName] = useState('');
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
    setTimeout(() => setName(''), 1000);
  };
  useEffect(() => {
    const openListener = () => setOpen(true);
    eventemitter.on(EventType.OPEN_CREATE_FIGURE_DIALOG, openListener);
    return () =>
      void eventemitter.off(EventType.OPEN_CREATE_FIGURE_DIALOG, openListener);
  }, []);

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
      eventemitter.emit(EventType.FIGURE_CREATED_OR_UPDATED_OR_DELETED);
    } catch (error) {
      logger.error(error, { description: '创建角色失败' });
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <Dialog open={open}>
      <Title>创建角色</Title>
      <Content>
        <Label label="角色名字">
          <Input
            value={name}
            onChange={onNameChange}
            placeholder={`角色名字不超过 ${NAME_MAX_LENGTH} 个字符`}
            maxLength={NAME_MAX_LENGTH}
            style={inputStyle}
          />
        </Label>
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

export default React.memo(CreateFigureDialog);
