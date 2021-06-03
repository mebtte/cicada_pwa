import React from 'react';
import styled from 'styled-components';

import { SearchKey, SEARCH_KEYS } from '@/apis/cms_get_music_list';
import useQuery from '@/utils/use_query';
import { cmsPage } from '../../style';
import Action from './action';
import CreateDialog from './create_dialog';
import MusicList from './music_list';
import { Query, QueryObject } from './constants';
import EditMusicCoverDialog from './edit_music_cover_dialog';
import EditMusicDialog from './edit_music_dialog';
import EditMusicLrcDialog from './edit_music_lrc_dialog';
import EditMusicSingerListDialog from './edit_music_singer_list_dialog';
import EditMusicResourceDialog from './edit_music_resource_dialog';

const Style = styled.div`
  ${cmsPage};
  display: flex;
`;

const Music = () => {
  const query = useQuery<QueryObject>();

  let searchKey = query[Query.SEARCH_KEY] as SearchKey;
  if (!SEARCH_KEYS.includes(searchKey)) {
    searchKey = SearchKey.COMPOSITE;
  }
  const searchValue = query[Query.SEARCH_VALUE] || '';
  const pageString = query[Query.PAGE];
  const page = pageString ? +pageString : 1 || 1;
  const createDialogOpen = !!query[Query.CREATE_DIALOG_OPEN];

  return (
    <Style>
      <Action />
      <MusicList page={page} searchKey={searchKey} searchValue={searchValue} />

      <CreateDialog open={createDialogOpen} />
      <EditMusicCoverDialog />
      <EditMusicDialog />
      <EditMusicLrcDialog />
      <EditMusicSingerListDialog />
      <EditMusicResourceDialog />
    </Style>
  );
};

export default Music;
