export interface User {
  id: string;
  email: string;
  avatar: string;
  nickname: string;
  status: string;
  joinTime: Date;
  cms: boolean;
}

export const AVATAR_MAX_SIZE = 1000;

export enum UpdateKey {
  AVATAR = 'avatar',
  NICKNAME = 'nickname',
  STATUS = 'status',
}
