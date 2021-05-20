import React from 'react';

import Button, { Type } from '@/components/button';
import { PlayMode as PlayModeType } from '../constant';
import eventemitter, { Type as EventType } from '../eventemitter';
import Item from './item';

const PLAY_MODES = Object.values(PlayModeType);
const PLAY_MODE_MAP_LABEL = {
  [PlayModeType.NORMAL]: '普通',
  [PlayModeType.ACCOMPANY]: '伴奏',
  [PlayModeType.HQ]: 'HQ',
};

const buttonStyle = {
  marginLeft: 10,
};
const changePlayMode = (playMode: PlayModeType) =>
  eventemitter.emit(EventType.CHANGE_PLAY_MODE, playMode);

const PlayMode = ({ playMode }: { playMode: PlayModeType }) => (
  <Item>
    <div className="label">播放模式</div>
    {PLAY_MODES.map((mode) => (
      <Button
        key={mode}
        label={PLAY_MODE_MAP_LABEL[mode]}
        type={playMode === mode ? Type.PRIMARY : Type.NORMAL}
        size={24}
        style={buttonStyle}
        onClick={() => changePlayMode(mode)}
      />
    ))}
  </Item>
);

export default PlayMode;
