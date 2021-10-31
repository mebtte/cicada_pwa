import * as sentry from '@sentry/browser';
import { Integrations } from '@sentry/tracing';

import config from '@/config';
import store from '@/store';

if (config.sentryDSN) {
  sentry.init({
    dsn: config.sentryDSN,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
    enabled: process.env.NODE_ENV === 'production',
  });
  sentry.configureScope((scope) => {
    scope.setExtra('version', config.version);
  });

  store.subscribe(() => {
    const { user } = store.getState();
    if (user) {
      sentry.configureScope((scope) => scope.setUser({ id: user.id }));
    } else {
      sentry.configureScope((scope) => scope.setUser(null));
    }
  });
}

export default {
  captureException: (error: Error) => {
    if (config.sentryDSN) {
      sentry.captureException(error);
    }
  },
};
