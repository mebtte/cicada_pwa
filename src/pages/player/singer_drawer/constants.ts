import { RequestStatus } from '@/constants';

import { MusicWithIndex } from '../constants';

export type MusicList =
  | { status: RequestStatus.LOADING }
  | { status: RequestStatus.ERROR; error: Error }
  | {
      status: RequestStatus.SUCCESS;
      value: MusicWithIndex[];
    };
