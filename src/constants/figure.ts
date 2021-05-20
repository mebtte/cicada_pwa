export const NAME_MAX_LENGTH = 255;
export const ALIAS_MAX_LENGTH = 255;
export const AVATAR_MAX_SIZE = 1000;

export enum SearchKey {
  IDS = 'ids',
  KEYWORD = 'keyword',
}

export interface Figure {
  id: string;
  name: string;
  avatar: string;
  alias: string;
}

export enum UpdateKey {
  AVATAR = 'avatar',
  NAME = 'name',
  ALIAS = 'alias',
}
