import React from 'react';
import { connect } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';

import { ROOT_PATH } from '@/constant/route';
import parseSearch from '../../util/parse_search';
import { User } from '../../constant/user';

import Signin from './signin';

const Wrapper = ({ user }: { user: User | null }) => {
  const location = useLocation();
  if (!user) {
    return <Signin />;
  }
  return (
    <Redirect
      to={decodeURIComponent(
        decodeURIComponent(
          parseSearch<{ redirect?: string }>(location.search).redirect,
        ) || ROOT_PATH.HOME,
      )}
    />
  );
};

export default connect(({ user }: { user: User | null }) => ({ user }))(
  Wrapper,
);
