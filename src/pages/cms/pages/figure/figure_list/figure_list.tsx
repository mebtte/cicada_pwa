import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import useHistory from '@/utils/use_history';
import day from '@/utils/day';
import { SearchKey } from '@/apis/cms_get_figure_list';
import cmsDeleteFigure from '@/apis/cms_delete_figure';
import toast from '@/platform/toast';
import logger from '@/platform/logger';
import dialog from '@/platform/dialog';
import IconButton, { Name, Type } from '@/components/icon_button';
import Empty from '@/components/empty';
import CircularLoader from '@/components/circular_loader';
import Table from '@/components/table';
import scrollbarAsNeeded from '@/style/scrollbar_as_needed';
import Avatar from '@/components/avatar';
import { Figure, Query } from '../constants';
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
    ${scrollbarAsNeeded}
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
  > .actions {
    display: flex;
    align-items: center;
    gap: 2px;
  }
`;
const emptyStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};
const ACTION_SIZE = 22;
const headers = ['ID', '名字', '头像', '别名', '创建时间', '操作'];
const OperationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
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
  const history = useHistory();
  const contentRef = useRef<HTMLDivElement | null>(null);

  const onDelete = (figure: Figure) =>
    dialog.confirm({
      title: `确定删除"${figure.name}"?`,
      content:
        '当角色仍挂载音乐时无法被删除, 如若需要删除请先解除关系. 此外, 删除角色会以邮件方式发送当前角色备份给其他 CMS 用户.',
      onConfirm: async () => {
        try {
          await cmsDeleteFigure(figure.id);
          toast.success(`"${figure.name}"已删除`);
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
      <div className="actions">
        <IconButton
          name={Name.EDIT_OUTLINE}
          size={ACTION_SIZE}
          onClick={() =>
            eventemitter.emit(EventType.OPEN_EDIT_FIGURE_AVATAR_DIALOG, figure)
          }
        />
      </div>
    </AvatarBox>,
    figure.alias || '-',
    day(figure.createTime).format('YYYY-MM-DD HH:mm'),
    <OperationBox>
      <IconButton
        name={Name.EDIT_OUTLINE}
        size={ACTION_SIZE}
        onClick={() =>
          eventemitter.emit(EventType.OPEN_EDIT_FIGURE_DIALOG, figure)
        }
      />
      <IconButton
        name={Name.HISTORY_OUTLINE}
        size={ACTION_SIZE}
        onClick={() =>
          history.push({
            query: {
              [Query.OPERATE_RECORD_DIALOG_OPEN]: '1',
              [Query.OPERATE_RECORD_DIALOG_SEARCH_FIGURE_ID]: figure.id,
            },
          })
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
            list={figureList}
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
