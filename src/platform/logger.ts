/* eslint-disable no-console */
import sentry from '@/platform/sentry';
import { Code } from '@/server';
import ErrorWithCode from '@/utils/error_with_code';

const NOT_REPORT_CODES = [Code.NOT_AUTHORIZE];

function error(
  e: Error | ErrorWithCode<Code>,
  { description = e.message, report = false } = {},
) {
  console.group(description);
  console.error(e);
  console.groupEnd();

  if (
    process.env.NODE_ENV === 'production' &&
    report &&
    // @ts-expect-error
    (!error.code || !NOT_REPORT_CODES.includes(error.code))
  ) {
    sentry.captureException(e);
  }
}

export default {
  error,
};
