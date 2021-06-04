import { useHistory, useLocation } from 'react-router-dom';

import useQuery from './use_query';

export default () => {
  const location = useLocation();
  const history = useHistory();
  const originalQuery = useQuery();

  const push = ({
    pathname = location.pathname,
    query,
  }: {
    pathname?: string;
    query?: { [key: string]: string };
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
