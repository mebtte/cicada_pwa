import React from 'react';
import styled from 'styled-components';

import { RequestStatus } from '@/constants';
import useSearch from './use_search';
import MusicList from '../../components/music_list';
import Action from './action';
import Pagination from './pagination';
import LrcSearchDialog from './lrc_search_dialog';

const Style = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  > .content {
    flex: 1;
    min-width: 0;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
  }
`;
const musicListStyle = {
  flex: 1,
  minHeight: 0,
};

const Wrapper = () => {
  const { keyword, error, loading, total, musicList, page, reload } =
    useSearch();
  // eslint-disable-next-line no-nested-ternary
  const status = error
    ? RequestStatus.ERROR
    : loading
    ? RequestStatus.LOADING
    : RequestStatus.SUCCESS;
  return (
    <Style>
      <div className="content">
        <MusicList
          status={status}
          musicList={musicList}
          reload={reload}
          emptyDescription="未找到相关音乐"
          errorMessage={error ? error.message : ''}
          style={musicListStyle}
        />
        <Pagination total={total} page={page} />
      </div>
      <Action loading={status === RequestStatus.LOADING} reload={reload} />

      <LrcSearchDialog keyword={keyword} />
    </Style>
  );
};

export default Wrapper;
