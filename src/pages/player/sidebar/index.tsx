import React, { useContext } from 'react';

import Context from '../context';
import Big from './big';
import Small from './small';

const Sidebar = () => {
  const { smallView } = useContext(Context);
  return smallView ? <Small /> : <Big />;
};

export default Sidebar;
