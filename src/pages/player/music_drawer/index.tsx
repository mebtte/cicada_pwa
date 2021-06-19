import React from 'react';
import { useTransition } from 'react-spring';

import Drawer from '@/components/drawer';
import useMusicPopup from './use_music_popup';
import Content from './content';
import { COVER_SIZE, PADDING } from './constants';

const bodyProps = {
  style: {
    width: COVER_SIZE + PADDING * 2,
  },
};

const MusicDrawer = () => {
  const { open, onClose, music } = useMusicPopup();
  const transitions = useTransition(music, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(100%)' },
  });
  return (
    <Drawer open={open} onClose={onClose} bodyProps={bodyProps}>
      {transitions((style, m) =>
        m ? <Content music={m} onClose={onClose} style={style} /> : null,
      )}
    </Drawer>
  );
};

export default React.memo(MusicDrawer);
