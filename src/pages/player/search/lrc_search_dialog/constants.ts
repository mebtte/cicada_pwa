import { Music as MusicType, MusicWithIndex } from '@/constants/music';
import { RequestStatus } from '@/constants';

export const PAGE_SIZE = 20;

export interface Music extends MusicWithIndex {
  music: MusicType & { lrc: string };
}

export type MusicList = { keyword: string } & (
  | { status: RequestStatus.LOADING }
  | {
      status: RequestStatus.ERROR;
      error: Error;
    }
  | {
      status: RequestStatus.SUCCESS;
      total: number;
      list: Music[];
    }
);
