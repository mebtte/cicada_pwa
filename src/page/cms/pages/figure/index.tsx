import React from 'react';
import styled from 'styled-components';

import { cmsPage } from '../../style';
import FigureList from './figure_list';
import Action from './action';
import CreateFigureDialog from './create_figure_dialog';

const Style = styled.div`
  ${cmsPage};
  display: flex;
`;

const Figure = () => (
  <Style>
    <FigureList />
    <Action />

    <CreateFigureDialog />
  </Style>
);

export default Figure;
