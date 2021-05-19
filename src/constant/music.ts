/* eslint-disable camelcase */
import { Figure } from './figure';

export enum SearchMusicKey {
  KEYWORD = 'keyword',
  SINGER = 'singer',
  IDS = 'ids',
}

export enum MusicType {
  NORMAL = 1,
  INSTRUMENT = 2,
}

export interface ApiMusic {
  id: string;
  cover: string;
  name: string;
  type: MusicType;
  alias: string;
  accompany: string;
  hq: string;
  mv: string;
  normal: string;
  singers: Figure[];
}

export interface Music {
  id: string;
  cover: string;
  name: string;
  type: MusicType;
  alias: string;
  accompany: boolean | string;
  hq: boolean | string;
  mv: boolean | string;
  normal: string;
  singers: Figure[];
}

export interface MusicWithIndex extends Music {
  index: number;
}

export interface MusicWithPid extends MusicWithIndex {
  pid: string;
}
