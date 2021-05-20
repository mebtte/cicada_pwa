import React from 'react';
import styled, { css } from 'styled-components';
import format from 'date-fns/format';

import Button, { Type } from '@/component/button';
import Empty from '@/component/empty';
import CircularLoader from '@/component/circular_loader';
import Table from '@/component/table';
import scrollbar from '@/style/scrollbar';
import Avatar from '@/component/avatar';
import { Figure } from '../constants';
import eventemitter, { EventType } from '../eventemitter';

const Style = styled.div<{ isLoading: boolean }>`
  flex: 1;
  min-height: 0;
  position: relative;
  margin: 0 20px;
  > .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: auto;
    ${scrollbar}
    > .table {
      width: 100%;
    }
  }
  > .loading {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${({ isLoading }) => css`
    > .content {
      opacity: ${isLoading ? 0.5 : 1};
    }
  `}
`;
const Operation = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const emptyStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};
const headers = ['ID', '头像', '名字', '别名', '创建时间', '操作'];
const rowRenderer = (figure: Figure) => [
  figure.id,
  figure.avatar ? <Avatar src={figure.avatar} /> : '-',
  figure.name,
  figure.alias || '-',
  format(figure.createTime, 'yyyy-MM-dd HH:mm'),
  <Operation>
    <Button
      label="编辑资料"
      type={Type.PRIMARY}
      size={20}
      onClick={() =>
        eventemitter.emit(EventType.OPEN_EDIT_FIGURE_DIALOG, figure)
      }
    />
    <Button
      label="编辑头像"
      type={Type.PRIMARY}
      size={20}
      onClick={() =>
        eventemitter.emit(EventType.OPEN_EDIT_FIGURE_AVATAR_DIALOG, figure)
      }
    />
  </Operation>,
];

const FigureList = ({
  figureList,
  loading,
}: {
  figureList: Figure[];
  loading: boolean;
}) => (
  <Style isLoading={loading}>
    {loading || figureList.length ? (
      <div className="content">
        <Table
          className="table"
          array={figureList}
          headers={headers}
          rowRenderer={rowRenderer}
          stickyHeader
        />
      </div>
    ) : (
      <Empty style={emptyStyle} />
    )}
    {loading && (
      <div className="loading">
        <CircularLoader />
      </div>
    )}
  </Style>
);

export default FigureList;
