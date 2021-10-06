import React from 'react';

import VerticalDrawer from '@/components/vertical_drawer';
import MenuItem from '@/components/menu_item';
import { Name as IconName } from '@/components/icon';
import useOpen from './use_open';
import eventemitter, { EventType } from '../eventemitter';
import playerEventemitter, {
  EventType as PlayerEventType,
} from '../../../eventemitter';

const onClose = () =>
  eventemitter.emit(EventType.CLOSE_MUSICBILL_OPERATE_DRAWER, {});
const openCreateMusicbillDialog = () =>
  playerEventemitter.emit(PlayerEventType.OPEN_CREATE_MUSICBILL_DIALOG, {});
const openSortMusicbillListDrawer = () =>
  playerEventemitter.emit(PlayerEventType.OPEN_MUSICBILL_ORDER_DRAWER, {});
const reloadMusicbillList = () =>
  playerEventemitter.emit(PlayerEventType.RELOAD_MUSICBILL_LIST, {});

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
        label="排序歌单"
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
