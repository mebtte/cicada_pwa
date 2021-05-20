import AsyncQueue from '@/utils/async_queue';

export class AbortError extends Error {}

export default new AsyncQueue({
  taskMinDuration: 1000 * 0.2,
  taskTimeout: 1000 * 10,
  abortErrorGenerator: () => new AbortError('Loading cover aborted.'),
});
