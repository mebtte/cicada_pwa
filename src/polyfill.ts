// requestIdleCallback
if (!window.requestIdleCallback) {
  window.requestIdleCallback = (callback) => setTimeout(callback, 0);
}
