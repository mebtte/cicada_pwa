import React from 'react';

import useHistory from '@/util/use_history';
import Pagination from '@/component/pagination';
import { PAGE_SIZE } from './constants';
import { Query } from '../constants';

const style = {
  margin: '20px 0',
};

const Wrapper = ({ page, total }: { page: number; total: number }) => {
  const history = useHistory();
  const onPageChange = (p: number) =>
    history.push({ query: { [Query.PAGE]: p } });

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
