import { Music as BaseMusic } from '../constants';

export const COVER_SIZE = 320;
export const PADDING = 20;

export type Music = Omit<BaseMusic, 'fork' | 'forkFrom'> & {
  fork: BaseMusic[];
  forkFrom: BaseMusic[];
  lrc: string;
};

export type Data =
  | { error: Error; loading: false }
  | { error: null; loading: true }
  | {
      error: null;
      loading: false;
      music: Music;
    };
