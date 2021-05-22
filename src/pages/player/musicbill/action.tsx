import React from 'react';
import styled from 'styled-components';

import { RequestStatus } from '@/constants';
import { LocalMusicbill } from '@/constants/musicbill';
import toast from '@/platform/toast';
import dialog from '@/platform/dialog';
import logger from '@/platform/logger';
import removeMusicbillRequest from '@/apis/remove_musicbill';
import Tooltip, { Placement } from '@/components/tooltip';
import IconButton, { Name } from '@/components/icon_button';
import eventemitter, { Type as EventType } from './eventemitter';
import playerEventemitter, { Type as PlayerEventType } from '../eventemitter';
import { TopContent } from './constant';

const ACTION_SIZE = 28;
const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;
const actionStyle = {
  margin: '5px 0',
};
const onSearch = () =>
  eventemitter.emit(EventType.TOP_CONTENT_CHANGE, TopContent.SEARCH);

const Action = ({
  musicbill,
  reload,
  onEdit,
  onEditCover,
}: {
  musicbill: LocalMusicbill;
  reload: () => void;
  onEdit: () => void;
  onEditCover: () => void;
}) => {
  const onAddToPlaylist = () => {
    const { musicList } = musicbill;
    if (!musicList.length) {
      return toast.info('这是空的歌单');
    }
    return playerEventemitter.emit(
      PlayerEventType.ACTION_ADD_MUSIC_LIST_TO_PLAYLIST,
      musicList,
    );
  };
  const onDelete = () =>
    dialog.confirm({
      title: `确定删除歌单"${musicbill.name}"?`,
      content: '注意, 歌单删除后无法恢复.',
      onConfirm: () =>
        dialog.confirm({
          title: `确定删除歌单"${musicbill.name}"?`,
          content:
            '注意, 歌单删除后无法恢复. 现在是第二次确认, 也是最后一次确认.',
          onConfirm: async () => {
            try {
              await removeMusicbillRequest(musicbill.id);
              toast.success(`歌单"${musicbill.name}"已删除`);
              playerEventemitter.emit(
                PlayerEventType.REMOVE_MUSICBILL,
                musicbill.id,
              );
            } catch (error) {
              logger.error(error, {
                description: '删除歌单失败',
                report: true,
              });
              dialog.alert({
                title: '删除歌单失败',
                content: error.message,
              });
              return true;
            }
          },
        }),
    });

  const { status } = musicbill;
  return (
    <Style>
      <Tooltip title="重新加载" placement={Placement.LEFT}>
        <IconButton
          name={Name.REFRESH_OUTLINE}
          size={ACTION_SIZE}
          loading={status === RequestStatus.LOADING}
          onClick={reload}
          style={actionStyle}
        />
      </Tooltip>
      <Tooltip title="全部添加到播放列表" placement={Placement.LEFT}>
        <IconButton
          name={Name.PLUS_OUTLINE}
          size={ACTION_SIZE}
          onClick={onAddToPlaylist}
          style={actionStyle}
          disabled={status !== RequestStatus.SUCCESS}
        />
      </Tooltip>
      <Tooltip title="歌单内查找" placement={Placement.LEFT}>
        <IconButton
          onClick={onSearch}
          size={ACTION_SIZE}
          name={Name.SEARCH_LIST_OUTLINE}
          style={actionStyle}
        />
      </Tooltip>
      <Tooltip title="更换歌单封面" placement={Placement.LEFT}>
        <IconButton
          name={Name.PICTURE_FILL}
          size={ACTION_SIZE}
          onClick={onEditCover}
          style={actionStyle}
        />
      </Tooltip>
      <Tooltip title="更新歌单信息" placement={Placement.LEFT}>
        <IconButton
          name={Name.EDIT_OUTLINE}
          size={ACTION_SIZE}
          onClick={onEdit}
          style={actionStyle}
        />
      </Tooltip>
      <Tooltip title="删除歌单" placement={Placement.LEFT}>
        <IconButton
          name={Name.GARBAGE_OUTLINE}
          size={ACTION_SIZE}
          onClick={onDelete}
          style={actionStyle}
        />
      </Tooltip>
    </Style>
  );
};

export default React.memo(Action);
