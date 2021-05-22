import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import format from 'date-fns/format';
import { Link } from 'react-router-dom';

import { CMS_PATH } from '@/constants/route';
import { MUSIC_TYPE_MAP_LABEL } from '@/constants/music';
import Avatar from '@/components/avatar';
import IconButton, { Name } from '@/components/icon_button';
import Button, { Type } from '@/components/button';
import CircularLoader from '@/components/circular_loader';
import Empty from '@/components/empty';
import Table from '@/components/table';
import scrollbar from '@/style/scrollbar';
import { Music } from '../constants';
import eventemitter, { EventType } from '../eventemitter';
import { Query, SearchKey } from '../../figure/constants';

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
    >.table {
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
const emptyStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};
const CoverBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ACTION_SIZE = 24;
const SingerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  > .singer-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    > .singer {
      text-decoration: none;
      color: #333;
      display: inline-block;
      border: 1px solid rgb(49 194 124 / 0.3);
      border-radius: 2px;
      padding: 2px 8px;
      font-size: 12px;
      cursor: pointer;
    }
  }
`;
const headers = [
  'ID',
  '名字',
  '封面',
  '类型',
  '歌手',
  '别名',
  '创建时间',
  '操作',
];
const OperationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const MusicList = ({
  loading,
  musicList,
  page,
}: {
  loading: boolean;
  musicList: Music[];
  page: number;
}) => {
  const contentRef = useRef<HTMLDivElement>();

  const rowRenderer = (music: Music) => [
    music.id,
    music.name,
    <CoverBox>
      {music.cover ? <Avatar src={music.cover} /> : '-'}
      <IconButton
        name={Name.EDIT_OUTLINE}
        size={ACTION_SIZE}
        onClick={() =>
          eventemitter.emit(EventType.OPEN_EDIT_MUSIC_COVER_DIALOG, music)
        }
      />
    </CoverBox>,
    MUSIC_TYPE_MAP_LABEL[music.type],
    <SingerBox>
      <div className="singer-list">
        {music.singers.map((s) => (
          <Link
            key={s.id}
            className="singer"
            to={`${CMS_PATH.FIGURE}?${Query.SEARCH_KEY}=${SearchKey.ID}&${Query.SEARCH_VALUE}=${s.id}`}
          >
            {s.name}
          </Link>
        ))}
      </div>
      <IconButton
        name={Name.EDIT_OUTLINE}
        size={ACTION_SIZE}
        onClick={() =>
          eventemitter.emit(EventType.OPEN_EDIT_MUSIC_SINGERS_DIALOG, music)
        }
      />
    </SingerBox>,
    music.alias || '-',
    format(music.createTime, 'yyyy-MM-dd HH:mm'),
    <OperationBox>
      <Button
        label="编辑"
        type={Type.PRIMARY}
        size={ACTION_SIZE}
        onClick={() =>
          eventemitter.emit(EventType.OPEN_EDIT_MUSIC_DIALOG, music)
        }
      />
      <Button label="删除" type={Type.DANGER} size={ACTION_SIZE} />
    </OperationBox>,
  ];

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    contentRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page]);

  return (
    <Style isLoading={loading}>
      {loading || musicList.length ? (
        <div className="content" ref={contentRef}>
          <Table
            className="table"
            array={musicList}
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

export default MusicList;
