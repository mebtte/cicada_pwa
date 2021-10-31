import { MusicWithIndex } from '../constants';

export interface Singer {
  id: string;
  avatar: string;
  name: string;
  alias: string;
  musicList: MusicWithIndex[];
}

export type Data =
  | {
      error: Error;
      loading: false;
    }
  | {
      error: null;
      loading: true;
    }
  | {
      error: null;
      loading: false;
      singer: Singer;
    };
