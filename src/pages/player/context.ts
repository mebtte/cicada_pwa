import { createContext } from 'react';

import { PlayMode, MusicWithIndex, QueueMusic } from './constants';
import { MusicbillList } from './use_musicbill_list';

interface Context {
  smallView: boolean;

  musicbillList: MusicbillList;

  playMode: PlayMode;

  audioLoading: boolean;
  audioPaused: boolean;
  audioDuration: number;

  playlist: MusicWithIndex[];

  playqueue: QueueMusic[];
  currentPlayqueuePosition: number;

  searchWord: string;

  volume: number; // 音量
}

const context = createContext<Context>({
  smallView: true,

  musicbillList: {
    loading: true,
    error: null,
    value: [],
  },

  playMode: PlayMode.SQ,

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
