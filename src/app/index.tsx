import React, { useCallback } from 'react';

import ErrorBoundary from '@/components/error_boundary';
import App from './app';
import UncaughtError from './uncaught_error';

const Wrapper = () => {
  const fallback = useCallback(
    (error: Error) => <UncaughtError error={error} />,
    [],
  );
  return (
    <ErrorBoundary fallback={fallback}>
      <App />
    </ErrorBoundary>
  );
};

export default React.memo(Wrapper);
