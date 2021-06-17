import React from 'react';
import { useTransition } from 'react-spring';

import { Musicbill } from '../../../constants';
import Info from './info';

const Wrapper = ({
  visible,
  musicbill,
}: {
  visible: boolean;
  musicbill: Musicbill;
}) => {
  const transitions = useTransition(visible, {
    from: {
      opacity: 0,
      transform: 'translate(0, -100%)',
    },
    enter: {
      opacity: 1,
      transform: 'translate(0, 0%)',
    },
    leave: {
      opacity: 0,
      transform: 'translate(0, -100%)',
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
