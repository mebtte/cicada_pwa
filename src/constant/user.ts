export enum Power {
  PANGU = 'pangu', // 超级权限

  DELETE_FIGURE = 'delete_figure', // 删除角色
  DELETE_MUSIC = 'delete_music', // 删除音乐
}

export interface User {
  id: string;
  email: string;
  avatar: string;
  nickname: string;
  status: string;
  joinTime: Date;
  powers: Power[];
}

export const AVATAR_MAX_SIZE = 1000;

export enum UpdateKey {
  AVATAR = 'avatar',
  NICKNAME = 'nickname',
  STATUS = 'status',
}
