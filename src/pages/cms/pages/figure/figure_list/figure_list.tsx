import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import format from 'date-fns/format';

import { SearchKey } from '@/apis/cms_get_figure_list';
import cmsDeleteFigure from '@/apis/cms_delete_figure';
import toast from '@/platform/toast';
import logger from '@/platform/logger';
import dialog from '@/platform/dialog';
import IconButton, { Name, Type } from '@/components/icon_button';
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
const ACTION_SIZE = 24;
const headers = ['ID', '名字', '头像', '别名', '创建时间', '操作'];
const OperationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const FigureList = ({
  figureList,
  loading,
  page,
  searchKey,
  searchValue,
}: {
  figureList: Figure[];
  loading: boolean;
  page: number;
  searchKey: SearchKey;
  searchValue: string;
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const onDelete = (figure: Figure) =>
    dialog.confirm({
      title: `确定删除角色"${figure.name}"?`,
      content: '当角色仍挂载音乐时无法被删除, 如若需要删除请先解除关系.',
      onConfirm: async () => {
        try {
          await cmsDeleteFigure(figure.id);
          toast.success(`角色"${figure.name}"已被删除`);
          eventemitter.emit(EventType.FIGURE_CREATED_OR_UPDATED_OR_DELETED);
        } catch (error) {
          logger.error(error, { description: '删除角色失败', report: true });
          toast.error(error.message);
        }
      },
    });
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
    <OperationBox>
      <IconButton
        name={Name.EDIT_OUTLINE}
        size={ACTION_SIZE}
        onClick={() =>
          eventemitter.emit(EventType.OPEN_EDIT_FIGURE_DIALOG, figure)
        }
      />
      <IconButton
        name={Name.GARBAGE_OUTLINE}
        type={Type.DANGER}
        size={ACTION_SIZE}
        onClick={() => onDelete(figure)}
      />
    </OperationBox>,
  ];

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    contentRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page, searchKey, searchValue]);

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
