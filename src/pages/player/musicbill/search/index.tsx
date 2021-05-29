import React, { useRef } from 'react';
import { useTransition } from 'react-spring';

import Search from './search';

const Wrapper = ({ visible, cover }: { visible: Boolean; cover: string }) => {
  const searchRef = useRef<{ focus: () => void }>(null);
  const transitions = useTransition(visible, {
    from: {
      opacity: 0,
      transform: 'translate(0, 100%)',
    },
    enter: {
      opacity: 1,
      transform: 'translate(0, 0)',
    },
    leave: {
      opacity: 0,
      transform: 'translate(0, 100%)',
    },
    onRest: () => {
      if (searchRef.current) {
        searchRef.current.focus();
      }
    },
  });
  return (
    <>
      {transitions((style, v) =>
        v ? <Search cover={cover} style={style} ref={searchRef} /> : null,
      )}
    </>
  );
};

export default Wrapper;
