const path = require('path');

const base = require('./base');

module.exports = {
  ...base,
  mode: 'development',
  cache: {
    type: 'filesystem',
  },
  devtool: 'eval-source-map',
  plugins: [...base.plugins],
  devServer: {
    contentBase: path.join(__dirname, '../build'),
    port: 8000,
    hot: true,
  },
};
