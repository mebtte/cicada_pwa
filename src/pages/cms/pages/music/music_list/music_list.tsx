import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import format from 'date-fns/format';
import { Link } from 'react-router-dom';

import cmsUpdateMusic, { Key } from '@/apis/cms_update_music';
import Tooltip from '@/components/tooltip';
import Tag, { Type as TagType } from '@/components/tag';
import { SearchKey as FigureSearchKey } from '@/apis/cms_get_figure_list';
import { SearchKey } from '@/apis/cms_get_music_list';
import cmsDeleteMusic from '@/apis/cms_delete_music';
import toast from '@/platform/toast';
import dialog from '@/platform/dialog';
import logger from '@/platform/logger';
import { CMS_PATH } from '@/constants/route';
import { MusicType, MUSIC_TYPE_MAP_LABEL } from '@/constants/music';
import Avatar from '@/components/avatar';
import IconButton, { Name, Type } from '@/components/icon_button';
import CircularLoader from '@/components/circular_loader';
import Empty from '@/components/empty';
import Table from '@/components/table';
import scrollbarAsNeeded from '@/style/scrollbar_as_needed';
import { EditMusicResourceType, Music } from '../constants';
import eventemitter, { EventType } from '../eventemitter';
import { Query } from '../../figure/constants';

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
const SmallTd = styled.span`
  font-size: 12px;
`;
const CoverBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > .actions {
    display: flex;
    align-items: center;
    gap: 2px;
  }
`;
const ACTION_SIZE = 22;
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
      white-space: nowrap;
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
  '资源',
  '创建时间',
  '操作',
];
const ResourceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  > .action {
    cursor: pointer;
  }
`;
const OperationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;
const EmptyTd = styled.span`
  color: rgb(155 155 155);
  font-size: 12px;
  &::after {
    content: '-';
  }
`;

const MusicList = ({
  loading,
  musicList,
  page,
  searchKey,
  searchValue,
}: {
  loading: boolean;
  musicList: Music[];
  page: number;
  searchKey: SearchKey;
  searchValue: string;
}) => {
  const contentRef = useRef<HTMLDivElement>();
  const onDelete = (music: Music) =>
    dialog.confirm({
      title: `确定删除"${music.name}"?`,
      content:
        '当音乐仍挂载有角色或存在二次创作版本时无法被删除, 如若需要删除请先解除关系.',
      onConfirm: async () => {
        try {
          await cmsDeleteMusic(music.id);
          toast.success(`"${music.name}"已被删除`);
          eventemitter.emit(EventType.MUSIC_CREATED_OR_UPDATED_OR_DELETED);
        } catch (error) {
          logger.error(error, { description: '删除音乐失败', report: true });
          toast.error(error.message);
        }
      },
    });
  const onDeleteCover = (music: Music) =>
    dialog.confirm({
      title: `确定删除"${music.name}"封面?`,
      onConfirm: async () => {
        try {
          await cmsUpdateMusic({ id: music.id, key: Key.COVER, value: '' });
          toast.success(`"${music.name}"封面已被删除`);
          eventemitter.emit(EventType.MUSIC_CREATED_OR_UPDATED_OR_DELETED);
        } catch (error) {
          logger.error(error, {
            description: '删除音乐封面失败',
            report: true,
          });
          toast.error(error.message);
        }
      },
    });

  const rowRenderer = (music: Music) => [
    <SmallTd>{music.id}</SmallTd>,
    music.name,
    <CoverBox>
      {music.cover ? <Avatar src={music.cover} /> : <EmptyTd />}
      <div className="actions">
        <IconButton
          name={Name.EDIT_OUTLINE}
          size={ACTION_SIZE}
          onClick={() =>
            eventemitter.emit(EventType.OPEN_EDIT_COVER_DIALOG, music)
          }
        />
        {music.cover ? (
          <IconButton
            name={Name.GARBAGE_OUTLINE}
            type={Type.DANGER}
            size={ACTION_SIZE}
            onClick={() => onDeleteCover(music)}
          />
        ) : null}
      </div>
    </CoverBox>,
    <SmallTd>{MUSIC_TYPE_MAP_LABEL[music.type]}</SmallTd>,
    <SingerBox>
      <div className="singer-list">
        {music.singers.map((s) => (
          <Link
            key={s.id}
            className="singer"
            to={`${CMS_PATH.FIGURE}?${Query.SEARCH_KEY}=${FigureSearchKey.ID}&${Query.SEARCH_VALUE}=${s.id}`}
          >
            {s.name}
          </Link>
        ))}
      </div>
      <IconButton
        name={Name.EDIT_OUTLINE}
        size={ACTION_SIZE}
        onClick={() =>
          eventemitter.emit(EventType.OPEN_EDIT_SINGER_LIST_DIALOG, music)
        }
      />
    </SingerBox>,
    music.alias || <EmptyTd />,
    <ResourceBox>
      <Tooltip title="标准音质">
        <Tag
          className="action"
          type={TagType.SQ}
          onClick={() =>
            eventemitter.emit(EventType.OPEN_EDIT_RESOURCE_DIALOG, {
              music,
              type: EditMusicResourceType.SQ,
            })
          }
        />
      </Tooltip>
      <Tooltip title="无损音质">
        <Tag
          className="action"
          type={TagType.HQ}
          gray={!music.hq}
          onClick={() =>
            eventemitter.emit(EventType.OPEN_EDIT_RESOURCE_DIALOG, {
              music,
              type: EditMusicResourceType.HQ,
            })
          }
        />
      </Tooltip>
      {music.type === MusicType.NORMAL ? (
        <Tooltip title="伴奏">
          <Tag
            className="action"
            type={TagType.AC}
            gray={!music.ac}
            onClick={() =>
              eventemitter.emit(EventType.OPEN_EDIT_RESOURCE_DIALOG, {
                music,
                type: EditMusicResourceType.AC,
              })
            }
          />
        </Tooltip>
      ) : null}
      <Tag
        className="action"
        type={TagType.MV}
        gray={!music.mvLink}
        onClick={() => eventemitter.emit(EventType.OPEN_EDIT_DIALOG, music)}
      />
      <Tooltip title="二次创作">
        <Tag
          className="action"
          type={TagType.FORK_FROM}
          gray={!music.forkFrom.length}
          onClick={() =>
            eventemitter.emit(EventType.OPEN_EDIT_FORK_FROM_DIALOG, music)
          }
        />
      </Tooltip>
    </ResourceBox>,
    <SmallTd>{format(music.createTime, 'yyyy-MM-dd HH:mm')}</SmallTd>,
    <OperationBox>
      <IconButton
        name={Name.EDIT_OUTLINE}
        size={ACTION_SIZE}
        onClick={() => eventemitter.emit(EventType.OPEN_EDIT_DIALOG, music)}
      />
      {music.type === MusicType.NORMAL ? (
        <IconButton
          name={Name.LYRIC_OUTLINE}
          size={ACTION_SIZE}
          onClick={() =>
            eventemitter.emit(EventType.OPEN_EDIT_LRC_DIALOG, music)
          }
        />
      ) : null}
      <IconButton
        name={Name.GARBAGE_OUTLINE}
        type={Type.DANGER}
        size={ACTION_SIZE}
        onClick={() => onDelete(music)}
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
