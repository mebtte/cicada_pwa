import { RequestStatus } from '@/constants';
import { useMemo } from 'react';

import { MusicWithIndex, Musicbill } from '../../../constants';
import { Status } from './constants';

interface LoadingState {
  status: Status.LOADING;
}
interface EmptyState {
  status: Status.EMPTY;
}

const LOADING_STATE: LoadingState = {
  status: Status.LOADING,
};
const EMPTY_STATE: EmptyState = {
  status: Status.EMPTY,
};

type State =
  | LoadingState
  | {
      status: Status.ERROR;
      error: Error;
    }
  | EmptyState
  | {
      status: Status.SUCCESS;
      musicList: MusicWithIndex[];
    };
const getState = (musicbill: Musicbill): State => {
  const { status, musicList, error } = musicbill;
  if (status === RequestStatus.SUCCESS) {
    if (musicList.length) {
      return { status: Status.SUCCESS, musicList };
    }
    return EMPTY_STATE;
  }
  if (status === RequestStatus.NOT_START || status === RequestStatus.LOADING) {
    return LOADING_STATE;
  }
  return { status: Status.ERROR, error: error! };
};

export default (musicbill: Musicbill) => {
  const state = useMemo<State>(() => getState(musicbill), [musicbill]);
  return state;
};
