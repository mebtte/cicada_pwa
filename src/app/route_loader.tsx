import React from 'react';

import ErrorCard from '../component/error_card';
import LoadingCard from '../component/loading_card';

const style = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
};

const RouteLoader = ({ error, retry }: { error?: Error; retry: () => void }) =>
  error ? (
    <ErrorCard errorMessage={error.message} retry={retry} style={style} />
  ) : (
    <LoadingCard style={style} />
  );

export default RouteLoader;
