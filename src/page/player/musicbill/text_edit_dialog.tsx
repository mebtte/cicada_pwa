import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import updateMusicbillRequest from '@/api/update_musicbill';
import toast from '@/platform/toast';
import logger from '@/platform/logger';
import {
  Musicbill as MusicbillType,
  UpdateKey,
  NAME,
  DESCRIPTION,
} from '@/constant/musicbill';
import dialog from '@/platform/dialog';
import Dialog, { Title, Content, Action } from '@/component/dialog';
import Button, { Type } from '@/component/button';
import Input from '@/component/input';
import Textarea from '@/component/textarea';
import eventemitter, { Type as EventType } from '../eventemitter';

const Part = styled.div`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  > .label {
    font-size: 14px;
    margin-bottom: 5px;
  }
  > .textarea {
    display: block;
    width: 100%;
    height: 120px;
    resize: vertical;
  }
`;
const inputStyle = {
  display: 'block',
  width: '100%',
};
const buttonStyle = {
  marginLeft: 20,
};

const TextEditDialog = ({
  open,
  onClose,
  musicbill,
}: {
  open: boolean;
  onClose: () => void;
  musicbill: MusicbillType;
}) => {
  const nameRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLTextAreaElement>();
  const [saving, setSaving] = useState(false);
  const onSave = async () => {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    if (name.length < NAME.MIN_LENGTH) {
      return toast.error(`"歌单名字"长度应大于等于${NAME.MIN_LENGTH}`);
    }
    if (name.length > NAME.MAX_LENGTH) {
      return toast.error(`"歌单名字"长度应小于等于${NAME.MAX_LENGTH}`);
    }
    if (description.length > DESCRIPTION.MAX_LENGTH) {
      return toast.error(`"歌单描述"长度应小于等于${NAME.MAX_LENGTH}`);
    }
    setSaving(true);
    try {
      if (musicbill.name !== name) {
        await updateMusicbillRequest({
          id: musicbill.id,
          key: UpdateKey.NAME,
          value: name,
        });
      }
      if (musicbill.description !== description) {
        await updateMusicbillRequest({
          id: musicbill.id,
          key: UpdateKey.DESCRIPTION,
          value: description,
        });
      }
      eventemitter.emit(EventType.UPDATE_MUSICBILL, {
        id: musicbill.id,
        change: { name, description },
      });
      toast.success(`已更新歌单"${musicbill.name}"`);
      onClose();
    } catch (error) {
      logger.error(error, { description: '更新歌单信息失败', report: true });
      dialog.alert({ title: '更新歌单信息失败', content: error.message });
    }
    setSaving(false);
  };

  useEffect(() => {
    if (open) {
      nameRef.current.value = musicbill.name;
      descriptionRef.current.value = musicbill.description;
    }
  }, [open, musicbill]);
  return (
    <Dialog open={open}>
      <Title>{`更新歌单"${musicbill.name}"`}</Title>
      <Content>
        <Part>
          <div className="label">名字</div>
          <Input
            ref={nameRef}
            style={inputStyle}
            maxLength={NAME.MAX_LENGTH}
            disabled={saving}
            type="text"
          />
        </Part>
        <Part>
          <div className="label">描述</div>
          <Textarea
            className="textarea"
            ref={descriptionRef}
            maxLength={DESCRIPTION.MAX_LENGTH}
            disabled={saving}
          />
        </Part>
      </Content>
      <Action>
        <Button
          label="取消"
          onClick={onClose}
          style={buttonStyle}
          disabled={saving}
          size={32}
        />
        <Button
          label="更新"
          style={buttonStyle}
          loading={saving}
          onClick={onSave}
          size={32}
          type={Type.PRIMARY}
        />
      </Action>
    </Dialog>
  );
};

export default React.memo(TextEditDialog);
