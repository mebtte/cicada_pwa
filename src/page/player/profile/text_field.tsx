import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';

import { User, UpdateKey } from '@/constant/user';
import updateUser from '@/api/update_user';
import logger from '@/platform/logger';
import store from '@/store';
import { reloadUser } from '@/store/user';
import dialog from '@/platform/dialog';
import Input from '@/component/input';
import Textarea from '@/component/textarea';
import Button, { Type } from '@/component/button';

const Style = styled.div`
  > .item {
    margin: 20px 0;
    display: flex;
    align-items: center;
    > .label {
      font-size: 14px;
      font-weight: bold;
      margin-right: 10px;
      width: 40px;
      text-align: right;
    }
    > .input {
      flex: 1;
      min-width: 0;
    }
    > .textarea {
      height: 120px;
    }
  }
  > .action {
    text-align: right;
  }
`;

const TextField = ({ user }: { user: User }) => {
  const [nickname, setNickname] = useState(user.nickname);
  const onNicknameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setNickname(event.target.value),
    [],
  );

  const [status, setStatus] = useState(user.status);
  const onStatusChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) =>
      setStatus(event.target.value),
    [],
  );

  const [updating, setUpdating] = useState(false);
  const onUpdate = async () => {
    setUpdating(true);
    try {
      if (nickname !== user.nickname) {
        await updateUser({ key: UpdateKey.NICKNAME, value: nickname });
      }
      if (status !== user.status) {
        await updateUser({ key: UpdateKey.STATUS, value: status });
      }
      // @ts-ignore
      await store.dispatch(reloadUser());
    } catch (error) {
      logger.error(error, {
        description: '更新用户信息失败',
        report: true,
      });
      dialog.alert({
        title: '更新用户信息失败',
        content: error.message,
      });
    }
    setUpdating(false);
  };

  return (
    <Style>
      <div className="item">
        <div className="label">ID</div>
        <Input className="input" defaultValue={user.id} disabled />
      </div>
      <div className="item">
        <div className="label">邮箱</div>
        <Input className="input" defaultValue={user.email} disabled />
      </div>
      <div className="item">
        <div className="label">注册</div>
        <Input
          className="input"
          defaultValue={format(user.joinTime, 'yyyy-MM-dd HH:mm')}
          disabled
        />
      </div>
      <div className="item">
        <div className="label">昵称</div>
        <Input
          className="input"
          value={nickname}
          onChange={onNicknameChange}
          disabled={updating}
        />
      </div>
      <div className="item">
        <div className="label">状态</div>
        <Textarea
          className="input textarea"
          value={status}
          onChange={onStatusChange}
          disabled={updating}
        />
      </div>
      <div className="action">
        <Button
          label="更新"
          type={Type.PRIMARY}
          size={32}
          disabled={nickname === user.nickname && status === user.status}
          loading={updating}
          onClick={onUpdate}
        />
      </div>
    </Style>
  );
};

export default TextField;
