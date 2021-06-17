import React from 'react';

import Slider from '@/components/slider';
import Item from './item';
import playerEventemiter, { Type as PlayerEventType } from '../../eventemitter';

const sliderStyle = {
  width: 200,
  padding: '15px 0',
};

const Volume = ({ volume }: { volume: number }) => {
  const onChange = (v: number) => {
    playerEventemiter.emit(PlayerEventType.ACTION_UPDATE_VOLUME, v);
  };

  return (
    <Item>
      <div className="label">相对系统音量</div>
      <Slider
        value={volume}
        onChange={onChange}
        step={0.01}
        min={0}
        max={1}
        style={sliderStyle}
      />
    </Item>
  );
};

export default React.memo(Volume);
