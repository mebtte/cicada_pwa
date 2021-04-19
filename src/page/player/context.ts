import { createContext } from 'react';

import { RequestStatus } from '../../constant';
import { PlayMode } from './constant';
import { MusicWithIndex, MusicWithPid } from '../../constant/music';
import { LocalMusicbill } from '../../constant/musicbill';

interface Context {
  getMusicbillListStatus: RequestStatus;
  musicbillList: LocalMusicbill[];

  playMode: PlayMode;

  audioLoading: boolean;
  audioPaused: boolean;
  audioDuration: number;

  playlist: MusicWithIndex[];

  playqueue: MusicWithPid[];
  currentPlayqueuePosition: number;

  searchWord: string;

  volume: number; // 音量
}

const context = createContext<Context>({
  getMusicbillListStatus: RequestStatus.LOADING,
  musicbillList: [],

  playMode: PlayMode.NORMAL,

  audioLoading: false,
  audioPaused: true,
  audioDuration: 0,

  playlist: [],

  playqueue: [],
  currentPlayqueuePosition: -1,

  searchWord: '',

  volume: 1,
});

export default context;
