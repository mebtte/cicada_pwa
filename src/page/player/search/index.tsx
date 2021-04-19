import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { ROOT_PATH } from '@/constant/route';
import { RequestStatus } from '@/constant';
import useSearch from './use_search';
import { routeContainerStyle } from '../style';
import MusicList from '../component/music_list';
import Action from './action';

const Style = styled.div`
  ${routeContainerStyle}
  display: flex;
`;
const musicListStyle = {
  flex: 1,
  minWidth: 0,
  marginLeft: 20,
};

const Wrapper = () => {
  const { keyword, status, musicList, reload } = useSearch();
  if (!keyword) {
    return <Redirect to={ROOT_PATH.PLAYER} />;
  }
  return (
    <Style>
      <MusicList
        style={musicListStyle}
        status={status}
        musicList={musicList}
        reload={reload}
        emptyDescription={`未找到"${keyword}"相关的音乐`}
      />
      <Action loading={status === RequestStatus.LOADING} reload={reload} />
    </Style>
  );
};

export default Wrapper;
