import { SERVER_ORIGIN } from './constants/storage_key';

// eslint-disable-next-line no-underscore-dangle
window.__CONFIG__ = __CONFIG__;

export default {
  ...__CONFIG__,
  serverOrigin: localStorage.getItem(SERVER_ORIGIN) || __CONFIG__.serverOrigin,
  buildTime: new Date(__CONFIG__.buildTime),
};
