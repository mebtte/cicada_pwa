import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { IS_ELECTRON, IS_WINDOWS, IS_MAC_OS } from '@/constant';
import { LocalMusicbill } from '@/constant/musicbill';
import keyboardHandlerWrapper from '@/utils/keyboard_handler_wrapper';
import { PLAYER_PATH } from '@/constant/route';

export default (musicbillList: LocalMusicbill[]) => {
  const history = useHistory();

  useEffect(() => {
    if (IS_ELECTRON) {
      const listener = keyboardHandlerWrapper((event: KeyboardEvent) => {
        const number = +event.key;
        if (
          !number ||
          number < 1 ||
          number > 9 ||
          number > musicbillList.length ||
          (!(IS_MAC_OS && event.metaKey) && !(IS_WINDOWS && event.ctrlKey))
        ) {
          return;
        }
        event.preventDefault();
        history.push(
          PLAYER_PATH.MUSICBILL.replace(':id', musicbillList[number - 1].id),
        );
      });
      document.addEventListener('keydown', listener);
      return () => document.removeEventListener('keydown', listener);
    }
  }, [musicbillList, history]);
};
