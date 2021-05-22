import React, { useEffect, useState } from 'react';

import cmsUpdateMusic from '@/apis/cms_update_music';
import toast from '@/platform/toast';
import logger from '@/platform/logger';
import Label from '@/components/label';
import Input from '@/components/input';
import Dialog, { Title, Content, Action } from '@/components/dialog';
import Button, { Type } from '@/components/button';
import { NAME_MAX_LENGTH, ALIAS_MAX_LENGTH } from '@/constants/music';
import { Music } from './constants';
import eventemitter, { EventType } from './eventemitter';

const labelStyle = {
  marginBottom: 20,
};
const inputStyle = {
  width: '100%',
};

const EditMusicDialog = () => {
  const [music, setMusic] = useState<Music | null>(null);

  const [name, setName] = useState('');
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const [alias, setAlias] = useState('');
  const onAliasChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setAlias(event.target.value);

  const onClose = () => {
    setMusic(null);
    setTimeout(() => {
      setName('');
      setAlias('');
    }, 1000);
  };
  useEffect(() => {
    const openListener = (m: Music) => {
      setMusic(m);
      setName(m.name);
      setAlias(m.alias);
    };
    eventemitter.on(EventType.OPEN_EDIT_MUSIC_DIALOG, openListener);
    return () =>
      void eventemitter.off(EventType.OPEN_EDIT_MUSIC_DIALOG, openListener);
  }, []);

  const [loading, setLoading] = useState(false);
  const onUpdate = async () => {
    if (!name) {
      return toast.error('请输入名字');
    }
    setLoading(true);
    try {
      let needUpdate = false;

      if (music.name !== name) {
        needUpdate = true;
        await cmsUpdateMusic({ id: music.id, key: 'name', value: name });
      }

      if (music.alias !== alias) {
        needUpdate = true;
        await cmsUpdateMusic({ id: music.id, key: 'alias', value: alias });
      }

      if (needUpdate) {
        toast.success(`音乐"${name}"已更新`);
        eventemitter.emit(EventType.MUSIC_UPDATED_OR_DELETED);
      }

      onClose();
    } catch (error) {
      logger.error(error, { description: '更新音乐失败', report: true });
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <Dialog open={!!music}>
      <Title>{music ? `编辑"${music.name}"资料` : '编辑音乐资料'}</Title>
      <Content>
        <Label label="名字" style={labelStyle}>
          <Input
            value={name}
            onChange={onNameChange}
            placeholder={`名字不超过 ${NAME_MAX_LENGTH} 个字符`}
            maxLength={NAME_MAX_LENGTH}
            disabled={loading}
            style={inputStyle}
          />
        </Label>
        <Label label="别名" style={labelStyle}>
          <Input
            value={alias}
            onChange={onAliasChange}
            placeholder={`别名不超过 ${ALIAS_MAX_LENGTH} 个字符`}
            maxLength={ALIAS_MAX_LENGTH}
            disabled={loading}
            style={inputStyle}
          />
        </Label>
      </Content>
      <Action>
        <Button label="取消" onClick={onClose} disabled={loading} />
        <Button
          label="更新"
          onClick={onUpdate}
          type={Type.PRIMARY}
          loading={loading}
        />
      </Action>
    </Dialog>
  );
};

export default React.memo(EditMusicDialog);
