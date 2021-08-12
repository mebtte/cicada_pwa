/* eslint-disable no-console */
import * as Sentry from '@sentry/browser';

function error(e: Error, { description = e.message, report = false } = {}) {
  if (process.env.NODE_ENV === 'production' && report) {
    Sentry.captureException(e);
  }
  console.group(description);
  console.error(e);
  console.groupEnd();
}

export default {
  error,
};
