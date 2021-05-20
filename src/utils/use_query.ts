import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import parseSearch from './parse_search';

export default <T>() => {
  const { search } = useLocation();
  const query = useMemo<T>(() => parseSearch<T>(search), [search]);

  return query;
};
