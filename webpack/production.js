const base = require('./base');

module.exports = {
  ...base,
  mode: 'production',
  plugins: [...base.plugins],
  devtool: 'nosources-source-map',
  optimization: {
    minimize: true,
  },
};
