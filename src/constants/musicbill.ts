import { RequestStatus } from '.';
import { MusicWithIndex } from './music';

export enum UpdateKey {
  NAME = 'name',
  DESCRIPTION = 'description',
  COVER = 'cover',
}

export const COVER_MAX_SIZE = 1000;

export const NAME = {
  MIN_LENGTH: 1,
  MAX_LENGTH: 33,
};

export const DESCRIPTION = {
  MIN_LENGTH: 0,
  MAX_LENGTH: 255,
};

export interface Musicbill {
  id: string;
  name: string;
  cover: string;
  order: number;
  description: string;
  createTime: Date;
  musicList: MusicWithIndex[];
}

export interface LocalMusicbill extends Musicbill {
  status: RequestStatus;
}
