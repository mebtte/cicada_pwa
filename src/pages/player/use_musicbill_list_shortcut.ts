import { useEffect } from 'react';

import { PLAYER_PATH } from '@/constants/route';
import { IS_MAC_OS, IS_WINDOWS } from '@/constants';
import keyboardHandlerWrapper from '@/utils/keyboard_handler_wrapper';
import useHistory from '@/utils/use_history';
import { Musicbill } from './constants';

export default (musicbillList: Musicbill[]) => {
  const history = useHistory();

  useEffect(() => {
    const onKeyDown = keyboardHandlerWrapper((event: KeyboardEvent) => {
      // 跳转歌单
      if (
        ['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(event.key) &&
        ((IS_MAC_OS && event.metaKey) || (IS_WINDOWS && event.ctrlKey))
      ) {
        const musicbill = musicbillList[Number(event.key) - 1];
        if (musicbill) {
          event.preventDefault();
          history.push({
            pathname: PLAYER_PATH.MUSICBILL.replace(':id', musicbill.id),
          });
        }
      }
    });
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [musicbillList, history]);
};
