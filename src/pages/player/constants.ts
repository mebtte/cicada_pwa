import { Type as TagType } from '@/components/tag';

export enum PlayMode {
  SQ = 'sq',
  HQ = 'hq',
  AC = 'ac',
}

export const PLAY_MODE_MAP: Record<
  PlayMode,
  {
    label: string;
    tagType: TagType;
  }
> = {
  [PlayMode.SQ]: {
    label: '标准音质',
    tagType: TagType.SQ,
  },
  [PlayMode.HQ]: {
    label: '无损音质',
    tagType: TagType.HQ,
  },
  [PlayMode.AC]: {
    label: '伴奏',
    tagType: TagType.AC,
  },
};

export const PLAY_MODES = Object.keys(PLAY_MODE_MAP) as PlayMode[];

export enum Query {
  KEYWORD = 'keyword',
  PAGE = 'page',
}
