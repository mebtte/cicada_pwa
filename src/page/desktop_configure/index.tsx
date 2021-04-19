import React from 'react';
import { Redirect } from 'react-router-dom';

import { IS_ELECTRON } from '@/constant';
import { ROOT_PATH } from '@/constant/route';
import DesktopConfigure from './desktop_configure';

const Wrapper = () => {
  if (IS_ELECTRON) {
    return <DesktopConfigure />;
  }
  return <Redirect to={ROOT_PATH.HOME} />;
};

export default Wrapper;
