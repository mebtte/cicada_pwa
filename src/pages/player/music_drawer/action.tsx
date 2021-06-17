import React from 'react';
import styled from 'styled-components';

import Tooltip from '@/components/tooltip';
import IconButton, { Name } from '@/components/icon_button';
import { Music } from '../constants';

const ACTION_SIZE = 24;
const Style = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Action = ({
  music,
  onPlay,
  onAddToPlayqueue,
  onAddToMusicbill,
  onOperate,
  onWatchMv,
}: {
  music: Music;
  onPlay: () => void;
  onAddToPlayqueue: () => void;
  onAddToMusicbill: () => void;
  onOperate: () => void;
  onWatchMv: () => void;
}) => (
  <Style>
    <IconButton name={Name.PLAY_OUTLINE} onClick={onPlay} size={ACTION_SIZE} />
    <Tooltip title="下一首播放">
      <IconButton
        name={Name.INSERT_OUTLINE}
        onClick={onAddToPlayqueue}
        size={ACTION_SIZE}
      />
    </Tooltip>
    <Tooltip title="添加到歌单">
      <IconButton
        name={Name.ADD_TO_OUTLINE}
        onClick={onAddToMusicbill}
        size={ACTION_SIZE}
      />
    </Tooltip>
    {music.mvLink ? (
      <Tooltip title="观看MV">
        <IconButton
          name={Name.VIDEO_OUTLINE}
          onClick={onWatchMv}
          size={ACTION_SIZE}
        />
      </Tooltip>
    ) : null}
    <IconButton
      name={Name.MORE_OUTLINE}
      onClick={onOperate}
      size={ACTION_SIZE}
    />
  </Style>
);

export default Action;
