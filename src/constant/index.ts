import getOriginalScrollbarWidth from '@/util/get_original_scrollbar_width';

export const CONTENT_MAX_WIDTH = 960;

export const CICADA_START_YEAR = 2016;

export const IS_ELECTRON = !!window.require;
export const IS_MAC_OS = navigator.userAgent.toUpperCase().includes('MAC OS');
export const IS_WINDOWS = navigator.userAgent.toUpperCase().includes('WINDOWS');

export enum RequestStatus {
  NOT_START = 'not_start',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export const ORIGINAL_SCROLLBAR_WIDTH = getOriginalScrollbarWidth();
