import React from 'react';
import styled from 'styled-components';

import ErrorCard from '@/components/error_card';
import Search from './search';
import MusicList from './music_list';
import useMusicList from './use_music_list';
import { SearchKey } from '../constants';
import Pagination from './pagination';

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
  page,
  searchKey,
  searchValue,
}: {
  page: number;
  searchKey: SearchKey;
  searchValue: string;
}) => {
  const { error, loading, musicList, retry, total } = useMusicList({
    page,
    searchKey,
    searchValue,
  });
  return (
    <Style>
      <Search
        searchKey={searchKey}
        searchValue={searchValue}
        loading={loading}
      />
      {error ? (
        <ErrorCard
          errorMessage={error.message}
          retry={retry}
          style={errorCardStyle}
        />
      ) : (
        <MusicList loading={loading} musicList={musicList} page={page} />
      )}
      <Pagination total={total} page={page} />
    </Style>
  );
};

export default Wrapper;
