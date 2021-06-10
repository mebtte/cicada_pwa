import React, { useContext } from 'react';
import styled from 'styled-components';

import Tooltip from '@/components/tooltip';
import IconButton, { Name as IconButtonName } from '@/components/icon_button';
import useAudioControl from '../use_audio_control';
import eventemitter, { Type as EventType } from '../eventemitter';
import Context from '../context';

const ACTION_SPACE = 15;
const ACTION_SIZE = 24;
const Style = styled.div`
  font-size: 0;
  display: flex;
  align-items: center;
  > .line {
    width: 1px;
    height: 15px;
    margin-left: ${ACTION_SPACE}px;
    background-color: rgb(222 222 222);
  }
  > .action {
    margin-left: ${ACTION_SPACE}px;
  }
`;
const onOpenList = () =>
  eventemitter.emit(EventType.OPEN_PLAYLIST_PLAYQUEUE_DRAWER);

const Action = ({
  onAddToMusicbill,
  onAddToPlayqueue,
  onOperate,
}: {
  onAddToMusicbill: () => void;
  onAddToPlayqueue: () => void;
  onOperate: () => void;
}) => {
  const { audioLoading, audioPaused } = useContext(Context);
  const { onTogglePlay, onPrevious, onNext } = useAudioControl(audioLoading);
  return (
    <Style>
      <Tooltip title="下一首播放">
        <IconButton
          className="action"
          name={IconButtonName.INSERT_OUTLINE}
          size={ACTION_SIZE}
          onClick={onAddToPlayqueue}
        />
      </Tooltip>
      <Tooltip title="添加到歌单">
        <IconButton
          className="action"
          name={IconButtonName.ADD_TO_OUTLINE}
          size={ACTION_SIZE}
          onClick={onAddToMusicbill}
        />
      </Tooltip>
      <Tooltip title="更多操作">
        <IconButton
          className="action"
          name={IconButtonName.MORE_OUTLINE}
          size={ACTION_SIZE}
          onClick={onOperate}
        />
      </Tooltip>
      <div className="line" />
      <Tooltip title="播放列表 | 播放队列">
        <IconButton
          className="action"
          name={IconButtonName.LIST_OUTLINE}
          size={ACTION_SIZE}
          onClick={onOpenList}
        />
      </Tooltip>
      <div className="line" />
      <IconButton
        className="action"
        name={IconButtonName.PREVIOUS_FILL}
        size={ACTION_SIZE}
        onClick={onPrevious}
      />
      <IconButton
        className="action"
        name={
          audioPaused ? IconButtonName.PLAY_FILL : IconButtonName.PAUSE_FILL
        }
        size={ACTION_SIZE * 1.3}
        onClick={onTogglePlay}
        loading={audioLoading}
      />
      <IconButton
        className="action"
        name={IconButtonName.NEXT_FILL}
        size={ACTION_SIZE}
        onClick={onNext}
      />
    </Style>
  );
};

export default Action;
