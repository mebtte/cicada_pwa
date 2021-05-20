import React from 'react';
import { useTransition } from 'react-spring';

import { LocalMusicbill } from '@/constant/musicbill';
import Info from './info';

const TRANSITION = {
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
};

const Wrapper = ({
  visible,
  musicbill,
}: {
  visible: boolean;
  musicbill: LocalMusicbill;
}) => {
  const transitions = useTransition(visible, null, TRANSITION);
  return (
    <>
      {transitions.map(({ item: v, key, props }) =>
        v ? <Info key={key} musicbill={musicbill} style={props} /> : null,
      )}
    </>
  );
};

export default Wrapper;
