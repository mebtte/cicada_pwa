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
  emptyImageList: string[];
  coverList: string[];

  serverOrigin: string;
  pwaOrigin: string;
}

declare global {
  const __CONFIG__: Config;

  type ValueOf<T> = T[keyof T];

  type AsyncReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
  ) => Promise<infer U>
    ? U
    : T extends (...args: any) => infer U
    ? U
    : any;

  type PromiseType<T> = T extends PromiseLike<infer U> ? U : T;

  interface Window {
    __CONFIG__?: Config;
    requestIdleCallback: (
      callback: (deadline: RequestIdleCallbackDeadline) => void,
      opts?: RequestIdleCallbackOptions,
    ) => RequestIdleCallbackHandle;
    cancelIdleCallback: (handle: RequestIdleCallbackHandle) => void;
  }
}
