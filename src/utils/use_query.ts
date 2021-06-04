import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import parseSearch from './parse_search';

export default <Keys extends string>() => {
  const { search } = useLocation();
  const query = useMemo(() => parseSearch<Keys>(search), [search]);
  return query;
};
