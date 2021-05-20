import React, { useRef } from 'react';
import { useTransition } from 'react-spring';

import Search from './search';

const Wrapper = ({ visible, cover }: { visible: Boolean; cover: string }) => {
  const searchRef = useRef<{ focus: () => void }>(null);
  // @ts-ignore
  const transitions = useTransition(visible, null, {
    from: {
      opacity: 0,
      transform: 'translateY(100%)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(100%)',
    },
    // @ts-ignore
    onRest: () => {
      if (searchRef.current) {
        searchRef.current.focus();
      }
    },
  });
  return (
    <>
      {transitions.map(({ item: v, key, props }) =>
        v ? (
          <Search key={key} cover={cover} style={props} ref={searchRef} />
        ) : null,
      )}
    </>
  );
};

export default Wrapper;
