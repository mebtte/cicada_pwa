import React from 'react';
import styled from 'styled-components';

import useQuery from '@/utils/use_query';
import { cmsPage } from '../../style';
import Action from './action';
import CreateMusicDialog from './create_music_dialog';
import MusicList from './music_list';
import { Query, QueryObject, SearchKey, SEARCH_KEYS } from './constants';

const Style = styled.div`
  ${cmsPage};
  display: flex;
`;

const Music = () => {
  const query = useQuery<QueryObject>();

  let searchKey = query[Query.SEARCH_KEY] as SearchKey;
  if (!SEARCH_KEYS.includes(searchKey)) {
    searchKey = SearchKey.NAME;
  }
  const createMusicDialogOpen = !!query[Query.CREATE_MUSIC_DIALOG_OPEN];

  return (
    <Style>
      <MusicList searchKey={searchKey} />
      <Action />

      <CreateMusicDialog open={createMusicDialogOpen} />
    </Style>
  );
};

export default Music;
