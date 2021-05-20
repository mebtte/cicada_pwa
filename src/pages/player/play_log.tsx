import React from 'react';

import { MusicWithPid } from '../../constants/music';
import recordPlayLog from '../../apis/record_play_log';
import logger from '../../platform/logger';
import eventemitter, { Type as EventType } from './eventemitter';
import Context from './context';

class PlayLog extends React.PureComponent<{
  music: MusicWithPid;
  duration: number;
}> {
  static contextType = Context;

  context: React.ContextType<typeof Context>;

  currentTime: number;

  componentDidMount() {
    window.addEventListener('beforeunload', this.onBeforeUnload);
    eventemitter.on(EventType.AUDIO_TIME_UPDATE, this.onTimeUpdate);
  }

  componentDidUpdate(prevProps) {
    const { music, duration } = prevProps;
    if (music.pid !== this.props.music.pid) {
      recordPlayLog({
        id: music.id,
        percent: duration ? this.currentTime / duration : 0,
      }).catch((error) =>
        logger.error(error, { description: '音乐播放记录失败', report: true }),
      );
    }
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onBeforeUnload);
    eventemitter.off(EventType.AUDIO_TIME_UPDATE, this.onTimeUpdate);
  }

  onBeforeUnload = () => {
    const {
      playqueue,
      currentPlayqueuePosition,
      audioDuration: duration,
    } = this.context;
    const music = playqueue[currentPlayqueuePosition];
    recordPlayLog({
      id: music.id,
      percent: duration ? this.currentTime / duration : 0,
    }).catch((error) =>
      logger.error(error, { description: '音乐播放记录失败', report: true }),
    );
  };

  onTimeUpdate = (time: number) =>
    setTimeout(() => {
      this.currentTime = time;
    }, 0);

  render() {
    return null;
  }
}

export default PlayLog;
