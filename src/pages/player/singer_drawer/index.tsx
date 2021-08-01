import React from 'react';

import SingerDrawer from './singer_drawer';
import useSinger from './use_singer';

const Wrapper = () => {
  const { open, onClose, singer } = useSinger();

  if (!singer) {
    return null;
  }
  return <SingerDrawer open={open} onClose={onClose} singer={singer} />;
};

export default React.memo(Wrapper);
