import { useHistory, useLocation } from 'react-router-dom';

import useQuery from './use_query';

export default () => {
  const location = useLocation();
  const history = useHistory();
  const originalQuery = useQuery<{ [key: string]: string }>();

  const push = ({
    pathname = location.pathname,
    query,
  }: {
    pathname?: string;
    query?: { [key: string]: string | number };
  }) => {
    const targetQuery = {
      ...originalQuery,
      ...query,
    };
    return history.push(
      `${pathname}?${Object.keys(targetQuery)
        .map((key) => `${key}=${encodeURIComponent(targetQuery[key])}`)
        .join('&')}`,
    );
  };

  return {
    push,
  };
};