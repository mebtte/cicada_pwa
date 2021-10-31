const keyboardHandlerWrapper =
  <T extends (...params: any[]) => void>(handler: T) =>
  (...params: Parameters<T>) => {
    if (
      document.activeElement &&
      (document.activeElement.tagName === 'INPUT' ||
        document.activeElement.tagName === 'TEXTAREA')
    ) {
      return;
    }
    return void handler(...params);
  };

export default keyboardHandlerWrapper;
