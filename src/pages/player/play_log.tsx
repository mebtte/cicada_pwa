import React from 'react';

import recordPlayLog from '@/apis/record_play_log';
import { QueueMusic } from './constants';
import logger from '../../platform/logger';
import eventemitter, { EventType } from './eventemitter';
import Context from './context';

interface Props {
  queueMusic: QueueMusic;
  duration: number;
}

class PlayLog extends React.PureComponent<Props> {
  static contextType = Context;

  // @ts-expect-error
  context: React.ContextType<typeof Context>;

  currentMillisecond: number;

  componentDidMount() {
    window.addEventListener('beforeunload', this.onBeforeUnload);
    eventemitter.on(EventType.AUDIO_TIME_UPDATED, this.onTimeUpdate);
  }

  componentDidUpdate(prevProps: Props) {
    const { queueMusic, duration } = prevProps;
    if (queueMusic.pid !== this.props.queueMusic.pid) {
      recordPlayLog({
        id: queueMusic.music.id,
        percent: duration ? this.currentMillisecond / 1000 / duration : 0,
      }).catch((error) =>
        logger.error(error, { description: '音乐播放记录失败', report: true }),
      );
    }
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onBeforeUnload);
    eventemitter.off(EventType.AUDIO_TIME_UPDATED, this.onTimeUpdate);
  }

  onBeforeUnload = () => {
    const {
      playqueue,
      currentPlayqueuePosition,
      audioDuration: duration,
    } = this.context;
    const queueMusic = playqueue[currentPlayqueuePosition] as QueueMusic | null;
    if (queueMusic) {
      recordPlayLog({
        id: queueMusic.music.id,
        percent: duration ? this.currentMillisecond / 1000 / duration : 0,
      }).catch((error) =>
        logger.error(error, { description: '音乐播放记录失败', report: true }),
      );
    }
  };

  onTimeUpdate = ({ currentMillisecond }: { currentMillisecond: number }) =>
    setTimeout(() => {
      this.currentMillisecond = currentMillisecond;
    }, 0);

  render() {
    return null;
  }
}

export default PlayLog;
