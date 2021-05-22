import React from 'react';
import styled from 'styled-components';

import useQuery from '@/utils/use_query';
import { cmsPage } from '../../style';
import FigureList from './figure_list';
import Action from './action';
import CreateFigureDialog from './create_figure_dialog';
import EditFigureAvatarDialog from './edit_figure_avatar_dialog';
import EditFigureDialog from './edit_figure_dialog';
import { Query, QueryObject, SearchKey, SEARCH_KEYS } from './constants';

const Style = styled.div`
  ${cmsPage};
  display: flex;
`;

const Figure = () => {
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
      <FigureList searchKey={searchKey} searchValue={searchValue} page={page} />
      <Action />

      <CreateFigureDialog />
      <EditFigureAvatarDialog />
      <EditFigureDialog />
    </Style>
  );
};

export default Figure;
