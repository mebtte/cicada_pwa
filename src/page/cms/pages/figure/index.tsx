import React from 'react';
import styled from 'styled-components';

import { cmsPage } from '../../style';
import FigureDetail from './figure_detail';
import FigureList from './figure_list';
import Action from './action';
import CreateDialog from './create_dialog';

const Style = styled.div`
  ${cmsPage};
  display: flex;
`;

const Figure = () => (
  <Style>
    <Action />
    <FigureList />
    <FigureDetail />
    <CreateDialog />
  </Style>
);

export default Figure;
