import { useRef, useEffect } from 'react';

import { IS_ELECTRON, IS_MAC_OS, IS_WINDOWS } from '@/constant';
import KeyboardHandlerWrapper from '@/utils/keyboard_handler_wrapper';

export default () => {
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (IS_ELECTRON) {
      const listener = KeyboardHandlerWrapper((event: KeyboardEvent) => {
        if (
          event.key !== 'f' ||
          (IS_MAC_OS && !event.metaKey) ||
          (IS_WINDOWS && !event.ctrlKey)
        ) {
          return;
        }
        event.preventDefault();
        inputRef.current.focus();
      });
      document.addEventListener('keydown', listener);
      return () => document.removeEventListener('keydown', listener);
    }
  }, []);

  return inputRef;
};
