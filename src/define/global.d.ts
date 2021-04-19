/* eslint-disable no-underscore-dangle */
import '@types/resize-observer-browser';

export {};

type RequestIdleCallbackHandle = any;
type RequestIdleCallbackOptions = {
  timeout: number;
};
type RequestIdleCallbackDeadline = {
  readonly didTimeout: boolean;
  timeRemaining: () => number;
};
interface Config {
  version: string;
  lastCommitMessage: string;
  dependencies: string[];
  buildTime: string;
  apiOrigin: string;
  webOrigin: string;
  emptyImageList: string[];
  coverList: string[];
}

declare global {
  const __CONFIG__: Config;

  type valueOf<T> = T[keyof T];

  interface Window {
    __CONFIG__?: Config;
    requestIdleCallback: (
      callback: (deadline: RequestIdleCallbackDeadline) => void,
      opts?: RequestIdleCallbackOptions,
    ) => RequestIdleCallbackHandle;
    cancelIdleCallback: (handle: RequestIdleCallbackHandle) => void;
  }
}
