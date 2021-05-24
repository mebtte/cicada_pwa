import React from 'react';
import styled from 'styled-components';

import { RequestStatus } from '@/constants';
import useSearch from './use_search';
import { routeContainerStyle } from '../style';
import MusicList from '../component/music_list';
import Action from './action';
import Pagination from './pagination';

const Style = styled.div`
  ${routeContainerStyle}
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
  const { error, loading, total, musicList, page, reload } = useSearch();
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
          style={musicListStyle}
        />
        <Pagination total={total} page={page} />
      </div>
      <Action loading={status === RequestStatus.LOADING} reload={reload} />
    </Style>
  );
};

export default Wrapper;
