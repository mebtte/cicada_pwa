import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';

import { ROOT_PATH } from '@/constant/route';
import { User } from '../constant/user';

const withSignin = () => (Component) => (props) => {
  const user = useSelector(
    ({ user: u }: { user: User | null }) => u,
    shallowEqual,
  );
  const { pathname } = useLocation();
  return user ? (
    <Component {...props} />
  ) : (
    <Redirect
      to={`${ROOT_PATH.SIGNIN}?redirect=${encodeURIComponent(pathname)}`}
    />
  );
};

export default withSignin;
