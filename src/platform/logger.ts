/* eslint-disable no-console */
function error(e: Error, { description = e.message, report = false } = {}) {
  // todo(mebtte): 错误上报
  if (process.env.NODE_ENV === 'producation' && report) {
    console.log('假装错误上报');
  }
  console.group(description);
  console.error(e);
  console.groupEnd();
}

export default {
  error,
};
