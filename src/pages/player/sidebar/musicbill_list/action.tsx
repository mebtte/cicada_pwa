import React from 'react';
import styled from 'styled-components';

import IconButton, { Name as IconButtonName } from '@/component/icon_button';
import Tooltip from '@/component/tooltip';
import eventemitter, { Type as EventType } from '../../eventemitter';
import { STATUS } from './constant';

const ACTION_SIZE = 20;
const Style = styled.div`
  padding: 0 20px 10px 20px;
  display: flex;
  align-items: center;
  > .label {
    flex: 1;
    min-width: 0;
    font-size: 12px;
    color: rgb(150 150 150);
  }
  > .icon {
    cursor: pointer;
    margin-left: 10px;
  }
`;

const onCreateMusicbill = () =>
  eventemitter.emit(EventType.OPEN_CREATE_MUSICBILL_DIALOG);
const onOrderMusicbillList = () =>
  eventemitter.emit(EventType.OPEN_MUSICBILL_ORDER_DRAWER);
const onReloadMusicbillList = () =>
  eventemitter.emit(EventType.RELOAD_MUSICBILL_LIST);

const Action = ({
  status,
  musicbillCount,
}: {
  status: ValueOf<typeof STATUS>;
  musicbillCount: number;
}) => (
  <Style>
    <div className="label">我的歌单</div>
    {status !== STATUS.LOADING && status !== STATUS.ERROR ? (
      <>
        <Tooltip title="创建歌单">
          <IconButton
            name={IconButtonName.PLUS_OUTLINE}
            size={ACTION_SIZE}
            onClick={onCreateMusicbill}
          />
        </Tooltip>
        {musicbillCount ? (
          <Tooltip title="排序歌单">
            <IconButton
              name={IconButtonName.SORT_OUTLINE}
              size={ACTION_SIZE}
              onClick={onOrderMusicbillList}
            />
          </Tooltip>
        ) : null}
      </>
    ) : null}
    <Tooltip title="重新获取歌单">
      <IconButton
        name={IconButtonName.REFRESH_OUTLINE}
        size={ACTION_SIZE}
        loading={status === STATUS.LOADING}
        onClick={onReloadMusicbillList}
      />
    </Tooltip>
  </Style>
);

export default Action;
