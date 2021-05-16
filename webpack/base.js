const path = require('path');
const cp = require('child_process');
const os = require('os');

const fs = require('fs-extra');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const pkg = require('../package.json');
const configSchema = require('./config_schema');
const config = require('../config.json');

const INVALID_FILES = ['.DS_Store'];
const STATIC_DIR = path.join(__dirname, '../src/static');

const { error } = configSchema.validate(config, { allowUnknown: true });
if (error) {
  throw error;
}

module.exports = {
  entry: path.join(__dirname, '../src/index.tsx'),
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name]_[hash].js',
    chunkFilename: '[name]_[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
        exclude: [/node_modules/],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: os.cpus().length,
              poolTimeout:
                process.env.NODE_ENV === 'production' ? 500 : Infinity,
            },
          },
          'babel-loader',
        ],
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      'react-spring$': 'react-spring/web.cjs',
      'react-spring/renderprops$': 'react-spring/renderprops.cjs',
      '@': path.resolve(__dirname, '..', 'src'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      __CONFIG__: JSON.stringify({
        version: pkg.version,
        lastCommitMessage: cp
          .execSync('git log --oneline')
          .toString()
          .split('\n')[0]
          .replace(/\s/, ': '),
        dependencies: Object.keys(pkg.devDependencies).sort(),
        buildTime: new Date(),
        emptyImageList: fs
          .readdirSync(`${STATIC_DIR}/empty`)
          .filter((f) => !INVALID_FILES.includes(f))
          .map((f) => `/empty/${f}`),
        coverList: fs
          .readdirSync(`${STATIC_DIR}/cover`)
          .filter((f) => !INVALID_FILES.includes(f))
          .map((f) => `/cover/${f}`),
        serverOrigin: config.server_origin,
        pwaOrigin: config.pwa_origin,
        githubRepository: config.github_repository,
      }),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: STATIC_DIR,
          to: path.join(__dirname, '../build'),
        },
      ],
    }),
    new HtmlPlugin({
      template: path.join(__dirname, '../src/index.html'),
      templateParameters: {
        PWA_ORIGIN: config.pwa_origin,
      },
    }),
  ],
};
