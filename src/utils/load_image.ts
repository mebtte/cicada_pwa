import timeoutFn from './timeout';

export default (
  url: string,
  {
    timeout = 30 * 1000,
  }: {
    timeout?: number;
  } = {},
) =>
  Promise.race([
    new Promise<HTMLImageElement>((resolve, reject) => {
      const image = document.createElement('img');
      image.src = url;
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error(`加载图片[${url}]失败.`));
    }),
    timeoutFn(timeout, {
      errorGenerator: (ms) => new Error(`加载图片[${url}]超时 ${ms}ms.`),
    }),
  ]);
