import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import Icon, { Name } from '@/component/icon';
import { EMAIL } from '@/constant/regexp';
import { LAST_SIGNIN_EMAIL } from '../../constant/storage_key';
import toast from '../../platform/toast';
import logger from '../../platform/logger';
import signin from '../../api/signin';
import store from '../../store';
import { setUser } from '../../store/user';
import dialog from '../../platform/dialog';
import Logo from './logo';
import VerifyCodeButton from './verify_code_button';
import Input from '../../component/input';
import Button, { Type } from '../../component/button';

const ICON_SIZE = 18;
const Style = styled.div`
  position: relative;
  border-radius: 4px;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.8);
  width: 300px;
  padding: 40px;
  > .input-box {
    display: flex;
    align-items: center;
    margin: 20px 0;
    > .input-wrapper {
      flex: 1;
      min-width: 0;
      position: relative;
      > .input {
        padding-right: ${ICON_SIZE + 10}px;
      }
      > .icon {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: rgba(0, 0, 0, 0.3);
      }
    }
  }
`;
const inputStyle = {
  width: '100%',
  display: 'block',
};

const Content = () => {
  const [email, setEmail] = useState(
    localStorage.getItem(LAST_SIGNIN_EMAIL) || '',
  );
  const onEmailChange = useCallback(
    (event) => setEmail(event.target.value),
    [],
  );
  const [verifyCode, setVerifyCode] = useState('');
  const onVerifyCodeChange = useCallback(
    (event) => setVerifyCode(event.target.value),
    [],
  );
  const [loading, setLoading] = useState(false);
  const onSignin = async () => {
    if (!EMAIL.test(email)) {
      return toast.error('邮箱格式错误');
    }
    setLoading(true);
    try {
      const user = await signin({ email, verifyCode });
      localStorage.setItem(LAST_SIGNIN_EMAIL, email);
      setTimeout(
        // @ts-ignore
        () => store.dispatch(setUser(user)),
        0,
      );
    } catch (error) {
      logger.error(error, { description: '登录失败', report: true });
      dialog.alert({
        title: '登录失败',
        content: error.message,
      });
    }
    setLoading(false);
  };

  return (
    <Style>
      <Logo />
      <div className="input-box">
        <div className="input-wrapper">
          <Input
            style={inputStyle}
            className="input"
            value={email}
            onChange={onEmailChange}
            placeholder="邮箱"
            type="text"
          />
          <Icon className="icon" name={Name.MAIL_FILL} size={ICON_SIZE} />
        </div>
      </div>
      <div className="input-box">
        <div className="input-wrapper">
          <Input
            style={inputStyle}
            className="input"
            value={verifyCode}
            onChange={onVerifyCodeChange}
            placeholder="验证码"
            type="text"
          />
          <Icon className="icon" name={Name.SHIELD_FILL} size={ICON_SIZE} />
        </div>
        <VerifyCodeButton email={email} />
      </div>
      <Button
        label="登录"
        block
        loading={loading}
        disabled={!email || !verifyCode}
        onClick={onSignin}
        type={Type.PRIMARY}
        size={32}
      />
    </Style>
  );
};

export default Content;
