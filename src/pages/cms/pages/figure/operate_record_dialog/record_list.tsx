import React from 'react';
import styled from 'styled-components';

import useHistory from '@/utils/use_history';
import IconButton, { Name } from '@/components/icon_button';
import ellipsis from '@/style/ellipsis';
import day from '@/utils/day';
import Table from '@/components/table';
import { Record as RecordType } from './constants';
import { Query } from '../constants';

const RECORD_TYPE_MAP_LABEL = {
  create: '创建',
  modify: '更改',
};
const style = {
  width: '100%',
};
const ContentBox = styled.div`
  display: flex;
  align-items: center;
  > .text {
    max-width: 150px;
    ${ellipsis}
  }
`;
const headers = ['角色 ID', '操作用户', '类型', '操作时间', '操作详情'];

const RecordList = ({ recordList }: { recordList: RecordType[] }) => {
  const history = useHistory();

  const rowRenderer = (record: RecordType) => [
    record.figure_id,
    <span title={record.user.id}>{record.user.nickname}</span>,
    RECORD_TYPE_MAP_LABEL[record.type] || '未知类型',
    day(record.operate_time).format('YYYY-MM-DD HH:mm'),
    record.content ? (
      <ContentBox>
        <div className="text">{record.content}</div>
        <IconButton
          name={Name.VIEW_OUTLINE}
          size={22}
          onClick={() =>
            history.push({
              query: {
                [Query.JSON_VIEW_STRING]: record.content,
              },
            })
          }
        />
      </ContentBox>
    ) : null,
  ];
  return (
    <Table
      array={recordList}
      headers={headers}
      rowRenderer={rowRenderer}
      stickyHeader
      style={style}
    />
  );
};

export default RecordList;
