import React from 'react';
import { useTransition } from 'react-spring';

import { LocalMusicbill } from '@/constants/musicbill';
import Info from './info';

const Wrapper = ({
  visible,
  musicbill,
}: {
  visible: boolean;
  musicbill: LocalMusicbill;
}) => {
  const transitions = useTransition(visible, {
    from: {
      opacity: 0,
      transform: 'translateY(-100%)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(-100%)',
    },
  });
  return (
    <>
      {transitions((style, v) =>
        v ? <Info musicbill={musicbill} style={style} /> : null,
      )}
    </>
  );
};

export default Wrapper;
