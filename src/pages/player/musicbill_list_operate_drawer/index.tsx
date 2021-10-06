import React from 'react';

import VerticalDrawer from '@/components/vertical_drawer';
import MenuItem from '@/components/menu_item';
import { Name as IconName } from '@/components/icon';
import useOpen from './use_open';
import eventemitter, { EventType } from '../eventemitter';

const onClose = () =>
  eventemitter.emit(EventType.CLOSE_MUSICBILL_LIST_OPERATE_DRAWER, {});
const openCreateMusicbillDialog = () =>
  eventemitter.emit(EventType.OPEN_CREATE_MUSICBILL_DIALOG, {});
const openSortMusicbillListDrawer = () =>
  eventemitter.emit(EventType.OPEN_MUSICBILL_ORDER_DRAWER, {});
const reloadMusicbillList = () =>
  eventemitter.emit(EventType.RELOAD_MUSICBILL_LIST, {});

const OperateDrawer = () => {
  const open = useOpen();
  return (
    <VerticalDrawer
      open={open}
      onClose={onClose}
      bodyProps={{
        style: {
          padding: '5px 0',
        },
        onClick: onClose,
      }}
    >
      <MenuItem
        icon={IconName.PLUS_OUTLINE}
        label="创建歌单"
        onClick={openCreateMusicbillDialog}
      />
      <MenuItem
        icon={IconName.EXCHANGE_OUTLINE}
        label="排序歌单列表"
        onClick={openSortMusicbillListDrawer}
      />
      <MenuItem
        icon={IconName.REFRESH_OUTLINE}
        label="重新加载歌单列表"
        onClick={reloadMusicbillList}
      />
    </VerticalDrawer>
  );
};

export default React.memo(OperateDrawer);
