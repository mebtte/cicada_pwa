/* eslint-disable camelcase */
import { Figure } from './figure';

export const COVER_MAX_SIZE = 1000;
export const NAME_MAX_LENGTH = 255;
export const ALIAS_MAX_LENGTH = 255;
export const MUSIC_NORMAL = {
  ACCEPT_MIMES: ['audio/mpeg', 'audio/x-m4a'],
  MAX_SIZE: 1024 * 1024 * 10,
};

export enum SearchMusicKey {
  KEYWORD = 'keyword',
  SINGER = 'singer',
  IDS = 'ids',
}

export enum MusicType {
  NORMAL = 1,
  INSTRUMENT = 2,
}

export const MUSIC_TYPE_MAP_LABEL: Record<MusicType, string> = {
  [MusicType.NORMAL]: '普通',
  [MusicType.INSTRUMENT]: '纯音乐',
};

export const MUSIC_TYPES = Object.keys(MUSIC_TYPE_MAP_LABEL).map(
  (t) => +t,
) as MusicType[];

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
