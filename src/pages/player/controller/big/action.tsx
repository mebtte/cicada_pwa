import React from 'react';
import styled from 'styled-components';

import IconButton, { Name as IconButtonName } from '@/components/icon_button';
import { Music } from '../../constants';
import eventemitter, { EventType } from '../../eventemitter';

const ACTION_SIZE = 26;

const Style = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  > .divider {
    width: 1px;
    height: 20px;
    background-color: rgb(0 0 0 / 0.1);

    margin: 0 6px;
  }
`;
const onOpenPlayListPlayqueue = () =>
  eventemitter.emit(EventType.OPEN_PLAYLIST_PLAYQUEUE_DRAWER, {});
const onTogglePlay = () => eventemitter.emit(EventType.ACTION_TOGGLE_PLAY, {});
const onPrevious = () => eventemitter.emit(EventType.ACTION_PREVIOUS, {});
const onNext = () => eventemitter.emit(EventType.ACTION_NEXT, {});

const Action = ({
  music,
  paused,
  loading,
}: {
  music: Music | null;
  paused: boolean;
  loading: boolean;
}) => {
  const onAddToPlayqueue = () => {
    if (!music) {
      return;
    }
    return eventemitter.emit(EventType.ACTION_INSERT_MUSIC_TO_PLAYQUEUE, {
      music,
    });
  };
  const onAddToMusicbill = () => {
    if (!music) {
      return;
    }
    return eventemitter.emit(EventType.OPEN_MUSICBILL_LIST_DRAWER, {
      music,
    });
  };
  const onOperate = () => {
    if (!music) {
      return;
    }
    return eventemitter.emit(EventType.OPEN_MUSIC_OPERATE_POPUP, {
      music,
    });
  };

  return (
    <Style>
      <IconButton
        name={IconButtonName.INSERT_OUTLINE}
        onClick={onAddToPlayqueue}
        size={ACTION_SIZE}
      />
      <IconButton
        name={IconButtonName.ADD_TO_OUTLINE}
        onClick={onAddToMusicbill}
        size={ACTION_SIZE}
      />
      <IconButton
        name={IconButtonName.MORE_OUTLINE}
        onClick={onOperate}
        size={ACTION_SIZE}
      />
      <div className="divider" />
      <IconButton
        name={IconButtonName.LIST_OUTLINE}
        onClick={onOpenPlayListPlayqueue}
        size={ACTION_SIZE}
      />
      <div className="divider" />
      <IconButton
        name={IconButtonName.PREVIOUS_FILL}
        onClick={onPrevious}
        size={ACTION_SIZE}
      />
      <IconButton
        name={paused ? IconButtonName.PLAY_FILL : IconButtonName.PAUSE_FILL}
        loading={loading}
        onClick={onTogglePlay}
        size={ACTION_SIZE + 4}
      />
      <IconButton
        name={IconButtonName.NEXT_FILL}
        onClick={onNext}
        size={ACTION_SIZE}
      />
    </Style>
  );
};

export default Action;
