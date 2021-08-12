import './polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import 'cropperjs/dist/cropper.min.css';
import * as Sentry from '@sentry/browser';
import { Integrations } from '@sentry/tracing';

import config from './config';
import store from './store';
import logger from './platform/logger';
import App from './app';
import ErrorCard from './components/error_card';
import { reloadUser } from './store/user';

async function initialize() {
  if (process.env.NODE_ENV === 'producation' && config.sentryDSN) {
    Sentry.init({
      dsn: config.sentryDSN,
      integrations: [new Integrations.BrowserTracing()],
      tracesSampleRate: 1.0,
    });
    Sentry.configureScope((scope) => {
      scope.setExtra('version', config.version);
    });
  }

  // @ts-expect-error
  window.requestIdleCallback(() => store.dispatch(reloadUser()));
}

initialize()
  .then(
    () =>
      void ReactDOM.render(
        <HashRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </HashRouter>,
        document.querySelector('#root'),
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
      document.querySelector('#root'),
    );
  });
