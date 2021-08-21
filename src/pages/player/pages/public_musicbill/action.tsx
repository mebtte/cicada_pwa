import React from 'react';
import styled from 'styled-components';

import toast from '@/platform/toast';
import dialog from '@/platform/dialog';
import Tooltip, { Placement } from '@/components/tooltip';
import IconButton, { Name } from '@/components/icon_button';
import { Musicbill } from './constants';
import playerEventemitter, {
  EventType as PlayerEventType,
} from '../../eventemitter';

const ACTION_SIZE = 28;
const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  gap: 10px;
  padding: 10px 0;
`;

const Action = ({
  musicbill,
  reload,
}: {
  musicbill: Musicbill;
  reload: () => void;
}) => {
  const onAddToPlaylist = () => {
    const { musicList } = musicbill;
    return playerEventemitter.emit(
      PlayerEventType.ACTION_ADD_MUSIC_LIST_TO_PLAYLIST,
      { musicList: musicList.map((m) => m.music) },
    );
  };
  return (
    <Style>
      <Tooltip title="重新加载" placement={Placement.LEFT}>
        <IconButton
          name={Name.REFRESH_OUTLINE}
          size={ACTION_SIZE}
          onClick={reload}
        />
      </Tooltip>
      <Tooltip title="全部添加到播放列表" placement={Placement.LEFT}>
        <IconButton
          name={Name.PLUS_OUTLINE}
          size={ACTION_SIZE}
          onClick={onAddToPlaylist}
        />
      </Tooltip>
      <Tooltip title="复制歌单 ID" placement={Placement.LEFT}>
        <IconButton
          name={Name.COPY_OUTLINE}
          size={ACTION_SIZE}
          onClick={() =>
            navigator.clipboard
              .writeText(musicbill.id)
              .then(() => toast.success(`已复制「${musicbill.id}」`))
              .catch((error) =>
                dialog.alert({
                  title: '复制失败',
                  content: error.message,
                }),
              )
          }
        />
      </Tooltip>
    </Style>
  );
};

export default Action;
