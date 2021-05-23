import React from 'react';
import styled from 'styled-components';

import { SearchKey, SEARCH_KEYS } from '@/apis/cms_get_music_list';
import useQuery from '@/utils/use_query';
import { cmsPage } from '../../style';
import Action from './action';
import CreateMusicDialog from './create_music_dialog';
import MusicList from './music_list';
import { Query, QueryObject } from './constants';
import EditMusicCoverDialog from './edit_music_cover_dialog';
import EditMusicDialog from './edit_music_dialog';
import EditMusicLrcDialog from './edit_music_lrc_dialog';

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
  const searchValue = query[Query.SEARCH_VALUE] || '';
  const pageString = query[Query.PAGE];
  const page = pageString ? +pageString : 1 || 1;

  return (
    <Style>
      <MusicList page={page} searchKey={searchKey} searchValue={searchValue} />
      <Action />

      <CreateMusicDialog />
      <EditMusicCoverDialog />
      <EditMusicDialog />
      <EditMusicLrcDialog />
    </Style>
  );
};

export default Music;
