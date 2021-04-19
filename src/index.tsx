import './polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import 'cropperjs/dist/cropper.min.css';

import initial from './initial';
import store from './store';
import logger from './platform/logger';
import App from './app';
import ErrorCard from './component/error_card';
import { reloadUser } from './store/user';

const mountNode = document.querySelector('#root');

initial()
  .then(
    () =>
      void ReactDOM.render(
        <HashRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </HashRouter>,
        mountNode,
      ),
  )
  .catch((error) => {
    logger.error(error, { description: '初始化失败', report: true });
    return void ReactDOM.render(
      <ErrorCard
        errorMessage="初始化失败"
        retry={() => window.location.reload()}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
        }}
      />,
      mountNode,
    );
  });

// @ts-ignore
window.requestIdleCallback(() => store.dispatch(reloadUser()));

// 移除 loading-script
window.requestIdleCallback(() =>
  document.querySelector('#loading-script')?.remove(),
);
