import React, { useEffect, useState } from 'react';

import { NAME_MAX_LENGTH, ALIAS_MAX_LENGTH } from '@/constant/figure';
import TextField from '@/components/text_field';
import cmsDeleteFigure from '@/apis/cms_delete_figure';
import cmsUpdateFigure from '@/apis/cms_update_figure';
import dialog from '@/platform/dialog';
import toast from '@/platform/toast';
import logger from '@/platform/logger';
import Button, { Type } from '@/components/button';
import Dialog, { Title, Content, Action } from '@/components/dialog';
import { Figure } from './constants';
import eventemitter, { EventType } from './eventemitter';

const textFieldStyle = {
  marginBottom: '20px',
};

const EditFigureDialog = () => {
  const [figure, setFigure] = useState<Figure>(null);
  const onClose = () => setFigure(null);
  const onDelete = () =>
    dialog.confirm({
      title: `确定删除角色"${figure.name}"?`,
      content: '当角色仍挂载音乐时无法被删除, 如若需要删除请先解除关系.',
      onConfirm: async () => {
        try {
          await cmsDeleteFigure(figure.id);
          toast.success(`角色"${figure.name}"已被删除`);
          eventemitter.emit(EventType.FIGURE_CREATED_OR_UPDATED_OR_DELETED);
          onClose();
        } catch (error) {
          logger.error(error, { description: '删除角色失败', report: true });
          toast.error(error.message);
        }
      },
    });

  const [name, setName] = useState('');
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const [alias, setAlias] = useState('');
  const onAliasChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setAlias(event.target.value);

  const [loading, setLoading] = useState(false);
  const onUpdate = async () => {
    if (!name) {
      return toast.error('请输入角色名字');
    }
    setLoading(true);
    try {
      let needUpdate = false;

      if (figure.name !== name) {
        needUpdate = true;
        await cmsUpdateFigure({ id: figure.id, key: 'name', value: name });
      }

      if (figure.alias !== alias) {
        needUpdate = true;
        await cmsUpdateFigure({ id: figure.id, key: 'alias', value: alias });
      }

      if (needUpdate) {
        toast.success(`角色"${name}"已更新`);
        eventemitter.emit(EventType.FIGURE_CREATED_OR_UPDATED_OR_DELETED);
      }

      onClose();
    } catch (error) {
      logger.error(error);
      toast.error(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    const openListener = (f: Figure) => {
      setFigure(f);
      setName(f.name);
      setAlias(f.alias);
    };
    eventemitter.on(EventType.OPEN_EDIT_FIGURE_DIALOG, openListener);
    return () =>
      void eventemitter.off(EventType.OPEN_EDIT_FIGURE_DIALOG, openListener);
  }, []);

  return (
    <Dialog open={!!figure}>
      <Title>编辑角色资料</Title>
      <Content>
        <TextField
          label="名字"
          inputProps={{
            value: name,
            onChange: onNameChange,
            placeholder: `名字不超过 ${NAME_MAX_LENGTH} 个字符`,
            maxLength: NAME_MAX_LENGTH,
            disabled: loading,
          }}
          style={textFieldStyle}
        />
        <TextField
          label="别名"
          inputProps={{
            value: alias,
            onChange: onAliasChange,
            placeholder: `别名不超过 ${ALIAS_MAX_LENGTH} 个字符`,
            maxLength: ALIAS_MAX_LENGTH,
            disabled: loading,
          }}
          style={textFieldStyle}
        />
      </Content>
      <Action>
        <div className="left">
          <Button
            label="删除角色"
            type={Type.DANGER}
            onClick={onDelete}
            disabled={loading}
          />
        </div>
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

export default EditFigureDialog;
