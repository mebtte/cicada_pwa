import sleep from '@/util/sleep';
import loadImage from '@/util/load_image';

const PER_IMAGE_MIN_LOAD_DURATION = 0.2 * 1000;

type Resolve = (image: HTMLImageElement) => void;
type Reject = (error: Error) => void;
interface queueIntm {
  url: string;
  resolve: Resolve;
  reject: Reject;
}

let queue: queueIntm[] = [];

let working = false;
const dequeue = () => {
  if (working || !queue.length) {
    return;
  }
  working = true;
  const { url, resolve, reject } = queue.shift();
  Promise.all([loadImage(url), sleep(PER_IMAGE_MIN_LOAD_DURATION)])
    .then(([image]) => resolve(image))
    .catch(reject)
    .finally(() => {
      working = false;
      dequeue();
    });
};

const createPromiseHandler = (url: string) => (
  resolve: Resolve,
  reject: Reject,
) => {
  queue.push({ url, resolve, reject });
  dequeue();
};

function load(url: string) {
  return new Promise<HTMLImageElement>(createPromiseHandler(url));
}

function remove(url: string) {
  queue = queue.filter((i) => i.url !== url);
}

export default {
  load,
  remove,
};
