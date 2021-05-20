import React, { ReactNode } from 'react';
import styled from 'styled-components';

import ErrorCard from '@/components/error_card';
import useFigureList from './use_figure_list';
import Search from './search';
import Pagination from './pagination';
import FigureList from './figure_list';

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

const Wrapper = () => {
  const { error, loading, page, total, retry, figureList } = useFigureList();

  let content: ReactNode = null;
  if (error) {
    content = (
      <ErrorCard
        errorMessage={error.message}
        retry={retry}
        style={errorCardStyle}
      />
    );
  } else {
    content = <FigureList figureList={figureList} loading={loading} />;
  }
  return (
    <Style>
      <Search loading={loading} />
      {content}
      <Pagination page={page} total={total} />
    </Style>
  );
};

export default Wrapper;
