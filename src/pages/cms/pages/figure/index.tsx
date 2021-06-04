import React from 'react';
import styled from 'styled-components';

import { SearchKey, SEARCH_KEYS } from '@/apis/cms_get_figure_list';
import useQuery from '@/utils/use_query';
import { cmsPage } from '../../style';
import FigureList from './figure_list';
import Action from './action';
import CreateDialog from './create_dialog';
import EditFigureAvatarDialog from './edit_figure_avatar_dialog';
import EditFigureDialog from './edit_figure_dialog';
import { Query } from './constants';

const Style = styled.div`
  ${cmsPage};
  display: flex;
`;

const Figure = () => {
  const query = useQuery<Query>();
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
      <FigureList searchKey={searchKey} searchValue={searchValue} page={page} />

      <CreateDialog open={createDialogOpen} />
      <EditFigureAvatarDialog />
      <EditFigureDialog />
    </Style>
  );
};

export default Figure;
