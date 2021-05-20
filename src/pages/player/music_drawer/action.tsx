import React from 'react';
import styled from 'styled-components';

import { Music } from '@/constants/music';
import Tooltip from '@/components/tooltip';
import IconButton, { Name } from '@/components/icon_button';

const ACTION_SIZE = 24;
const Style = styled.div`
  margin: 10px 0;
`;
const iconButtonStyle = {
  marginRight: 5,
};

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
    <IconButton
      name={Name.PLAY_OUTLINE}
      onClick={onPlay}
      style={iconButtonStyle}
      size={ACTION_SIZE}
    />
    <Tooltip title="下一首播放">
      <IconButton
        name={Name.INSERT_OUTLINE}
        onClick={onAddToPlayqueue}
        style={iconButtonStyle}
        size={ACTION_SIZE}
      />
    </Tooltip>
    <Tooltip title="添加到歌单">
      <IconButton
        name={Name.ADD_TO_OUTLINE}
        onClick={onAddToMusicbill}
        style={iconButtonStyle}
        size={ACTION_SIZE}
      />
    </Tooltip>
    {music.mv ? (
      <Tooltip title="观看MV">
        <IconButton
          name={Name.VIDEO_OUTLINE}
          onClick={onWatchMv}
          style={iconButtonStyle}
          size={ACTION_SIZE}
        />
      </Tooltip>
    ) : null}
    <IconButton
      name={Name.MORE_OUTLINE}
      onClick={onOperate}
      style={iconButtonStyle}
      size={ACTION_SIZE}
    />
  </Style>
);

export default Action;
