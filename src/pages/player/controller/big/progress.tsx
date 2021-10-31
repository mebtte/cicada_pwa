import React, { useContext } from 'react';

import Slider from '@/components/slider';
import useAudioCurrentMillisecond from '../../use_audio_current_millisecond';
import Context from '../../context';
import eventemitter, { EventType } from '../../eventemitter';

const style = {
  margin: '8px 0 5px 0',
};

const Progress = () => {
  const { audioDuration } = useContext(Context);
  const currentMillisecond = useAudioCurrentMillisecond();
  const onChange = (value: number) =>
    eventemitter.emit(EventType.ACTION_SET_TIME, {
      second: audioDuration * value,
    });

  const value = audioDuration ? currentMillisecond / 1000 / audioDuration : 0;
  return <Slider value={value} onChange={onChange} style={style} />;
};

export default Progress;
