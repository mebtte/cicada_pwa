import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import parseSearch from './parse_search';

export default <T>() => {
  const { search } = useLocation();
  const [query, setQuery] = useState<T>(parseSearch<T>(search));

  useEffect(() => {
    setQuery(parseSearch<T>(search));
  }, [search]);

  return query;
};
