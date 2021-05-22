import React from 'react';
import styled from 'styled-components';

import ErrorCard from '@/components/error_card';
import useFigureList from './use_figure_list';
import Search from './search';
import Pagination from './pagination';
import FigureList from './figure_list';
import { SearchKey } from '../constants';

const Style = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`;
const errorCardStyle = {
  flex: 1,
  minHeight: 0,
};

const Wrapper = ({
  searchKey,
  searchValue,
  page,
}: {
  searchKey: SearchKey;
  searchValue: string;
  page: number;
}) => {
  const { error, loading, total, retry, figureList } = useFigureList({
    searchKey,
    searchValue,
    page,
  });

  return (
    <Style>
      <Search
        loading={loading}
        searchKey={searchKey}
        searchValue={searchValue}
      />
      {error ? (
        <ErrorCard
          errorMessage={error.message}
          retry={retry}
          style={errorCardStyle}
        />
      ) : (
        <FigureList figureList={figureList} loading={loading} page={page} />
      )}
      <Pagination page={page} total={total} />
    </Style>
  );
};

export default Wrapper;
