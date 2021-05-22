import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import format from 'date-fns/format';

import IconButton, { Name } from '@/components/icon_button';
import Button, { Type } from '@/components/button';
import Empty from '@/components/empty';
import CircularLoader from '@/components/circular_loader';
import Table from '@/components/table';
import scrollbar from '@/style/scrollbar';
import Avatar from '@/components/avatar';
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
const AvatarBox = styled.div`
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
const actionStyle = {
  flexShrink: 1,
};
const ACTION_SIZE = 24;
const headers = ['ID', '名字', '头像', '别名', '创建时间', '操作'];
const rowRenderer = (figure: Figure) => [
  figure.id,
  figure.name,
  <AvatarBox>
    {figure.avatar ? <Avatar src={figure.avatar} /> : '-'}
    <IconButton
      name={Name.EDIT_OUTLINE}
      size={ACTION_SIZE}
      onClick={() =>
        eventemitter.emit(EventType.OPEN_EDIT_FIGURE_AVATAR_DIALOG, figure)
      }
    />
  </AvatarBox>,
  figure.alias || '-',
  format(figure.createTime, 'yyyy-MM-dd HH:mm'),
  <Button
    label="编辑"
    type={Type.PRIMARY}
    size={ACTION_SIZE}
    onClick={() => eventemitter.emit(EventType.OPEN_EDIT_FIGURE_DIALOG, figure)}
    style={actionStyle}
  />,
];

const FigureList = ({
  figureList,
  loading,
  page,
}: {
  figureList: Figure[];
  loading: boolean;
  page: number;
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    contentRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page]);

  return (
    <Style isLoading={loading}>
      {loading || figureList.length ? (
        <div className="content" ref={contentRef}>
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
};

export default FigureList;
