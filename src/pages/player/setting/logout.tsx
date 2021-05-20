import React from 'react';

import dialog from '@/platform/dialog';
import store from '@/store';
import { clearUser } from '@/store/user';
import Button, { Type } from '@/components/button';

const style = {
  margin: 20,
  width: 'calc(100% - 40px)',
};
const onSignout = () =>
  dialog.confirm({
    title: '确定退出登录?',
    // @ts-ignore
    onConfirm: () => void store.dispatch(clearUser()),
  });

const Logout = () => (
  <Button
    block
    label="退出登录"
    type={Type.DANGER}
    onClick={onSignout}
    size={32}
    style={style}
  />
);

export default Logout;
