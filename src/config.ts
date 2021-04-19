const config = __CONFIG__;

// eslint-disable-next-line no-underscore-dangle
window.__CONFIG__ = __CONFIG__;

export default {
  ...config,
  buildTime: new Date(config.buildTime),
};
