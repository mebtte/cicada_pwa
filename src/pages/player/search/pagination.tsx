import React from 'react';

import useHistory from '@/utils/use_history';
import Pagination from '@/components/pagination';
import { Query } from '../constants';
import { PAGE_SIZE } from './constants';

const style = {
  margin: '20px 0',
};

const Wrapper = ({ total, page }: { total: number; page: number }) => {
  const history = useHistory();
  const onPageChange = (p: number) =>
    history.push({
      query: {
        [Query.PAGE]: p.toString(),
      },
    });
  return (
    <Pagination
      currentPage={page}
      pageCount={Math.ceil(total / PAGE_SIZE)}
      onPageChange={onPageChange}
      style={style}
    />
  );
};

export default Wrapper;
