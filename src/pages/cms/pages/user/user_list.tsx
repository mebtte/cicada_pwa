import React from 'react';
import styled, { css } from 'styled-components';
import format from 'date-fns/format';

import Icon, { Name as IconName } from '@/components/icon';
import Avatar from '@/components/avatar';
import IconButton, { Name as IconButtonName } from '@/components/icon_button';
import ErrorCard from '@/components/error_card';
import Table from '@/components/table';
import scrollbarAsNeeded from '@/style/scrollbar_as_needed';
import CircularLoader from '@/components/circular_loader';
import useUserList from './use_user_list';
import eventemitter, { EventType } from './eventemitter';
import { User as UserType } from './constants';

const Style = styled.div<{ isLoading: boolean }>`
  flex: 1;
  min-width: 0;
  position: relative;
  margin: 20px 20px 20px 0;
  > .part {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  > .list {
    ${scrollbarAsNeeded}
    overflow: auto;
    box-sizing: border-box;
    > .table {
      width: 100%;
    }
  }
  > .loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${({ isLoading }) => css`
    > .list {
      opacity: ${isLoading ? 0.5 : 1};
    }
  `}
`;
const enableStyle = {
  color: 'var(--color-primary)',
};
const disableStyle = {
  color: 'rgb(220 0 78)',
};
const ACTION_SIZE = 24;
const headers = [
  'ID',
  '邮箱',
  '昵称',
  '状态',
  '头像',
  '注册时间',
  'CMS',
  '账号是否可用',
  '备注',
  '操作',
];
const rowRenderer = (u: UserType) => [
  u.id,
  u.email,
  u.nickname,
  u.condition,
  u.avatar ? <Avatar src={u.avatar} /> : '-',
  format(u.joinTime, 'yyyy-MM-dd HH:mm'),
  <Icon
    name={u.cms ? IconName.CORRECT_OUTLINE : IconName.WRONG_OUTLINE}
    style={u.cms ? enableStyle : disableStyle}
  />,
  <Icon
    name={u.disabled ? IconName.WRONG_OUTLINE : IconName.CORRECT_OUTLINE}
    style={u.disabled ? disableStyle : enableStyle}
  />,
  u.remark,
  <IconButton
    name={IconButtonName.EDIT_OUTLINE}
    size={ACTION_SIZE}
    onClick={() => eventemitter.emit(EventType.OPEN_UPDATE_DIALOG, u)}
  />,
];

const UserList = () => {
  const { error, retry, loading, userList } = useUserList();
  return (
    <Style isLoading={loading}>
      {error ? (
        <ErrorCard
          className="part"
          errorMessage={error.message}
          retry={retry}
        />
      ) : (
        <>
          <div className="part list">
            <Table
              className="table"
              headers={headers}
              array={userList}
              rowRenderer={rowRenderer}
              stickyHeader
            />
          </div>
          {loading ? (
            <div className="part loading">
              <CircularLoader />
            </div>
          ) : null}
        </>
      )}
    </Style>
  );
};

export default UserList;
