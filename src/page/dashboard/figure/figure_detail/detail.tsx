import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import eventemitter, { Type as EventType } from '../eventemitter';
import dialog from '../../../../platform/dialog';
import logger from '../../../../platform/logger';
import toast from '../../../../platform/toast';
import removeFigure from '../../../../api/remove_figure';
import {
  Figure,
  NAME_MAX_LENGTH,
  ALIAS_MAX_LENGTH,
  UpdateKey,
} from '../../../../constant/figure';
import updateFigure from '../../../../api/update_figure';
import Button, { Type } from '../../../../component/button';
import Avatar from './avatar';
import TextField from './text_field';

const Style = styled.div`
  flex: 1;
  min-width: 0;
  > .actions {
    margin: 20px 30px;
    text-align: right;
    > .action {
      margin-left: 20px;
    }
  }
`;

const Detail = ({ figure }: { figure: Figure; keyword?: string }) => {
  const [name, setName] = useState('');
  const onNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value),
    [],
  );

  const [alias, setAlias] = useState('');
  const onAliasChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setAlias(event.target.value),
    [],
  );

  const onRemoveFigure = () =>
    dialog.confirm({
      title: `确定删除角色"${figure.name}"吗?`,
      content: '注意, 删除角色后无法恢复!',
      onConfirm: () =>
        dialog.confirm({
          title: `确定删除角色"${figure.name}"吗?`,
          content: '这次是第二次确认, 也是最后一次确认.',
          onConfirm: async () => {
            try {
              await removeFigure(figure.id);
              eventemitter.emit(EventType.FIGURE_REMOVED, figure.id);
              toast.success(`已删除角色"${figure.name}"`);
            } catch (e) {
              logger.error(e, { description: '删除角色失败', report: true });
              dialog.alert({
                title: '删除角色失败',
                content: e.message,
              });
              return true;
            }
          },
        }),
    });

  const [loading, setLoading] = useState(false);
  const onUpdate = async () => {
    setLoading(true);
    try {
      if (name !== figure.name) {
        await updateFigure({ id: figure.id, key: UpdateKey.NAME, value: name });
        eventemitter.emit(EventType.FIGURE_UPDATED, {
          id: figure.id,
          key: 'name',
          value: name,
        });
      }
      if (alias !== figure.alias) {
        await updateFigure({
          id: figure.id,
          key: UpdateKey.ALIAS,
          value: alias,
        });
        eventemitter.emit(EventType.FIGURE_UPDATED, {
          id: figure.id,
          key: 'alias',
          value: alias,
        });
      }
    } catch (error) {
      logger.error(error, { description: '更新角色失败', report: true });
      dialog.alert({
        title: '更新角色失败',
        content: error.message,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    setName(figure.name);
    setAlias(figure.alias);
  }, [figure]);

  return (
    <Style>
      <Avatar figure={figure} />
      <TextField label="ID" value={figure.id} disabled />
      <TextField
        label="名字"
        value={name}
        onChange={onNameChange}
        maxLength={NAME_MAX_LENGTH}
        disabled={loading}
      />
      <TextField
        label="别名"
        value={alias}
        onChange={onAliasChange}
        maxLength={ALIAS_MAX_LENGTH}
        disabled={loading}
      />
      <div className="actions">
        <Button
          className="action"
          label="删除"
          size={32}
          type={Type.DANGER}
          onClick={onRemoveFigure}
          disabled={loading}
        />
        <Button
          className="action"
          label="更新"
          size={32}
          type={Type.PRIMARY}
          disabled={figure.name === name && figure.alias === alias}
          onClick={onUpdate}
          loading={loading}
        />
      </div>
    </Style>
  );
};

export default Detail;
