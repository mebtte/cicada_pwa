import React from 'react';
import styled from 'styled-components';

import { cmsPage } from '../../style';
import FigureList from './figure_list';
import Action from './action';
import CreateFigureDialog from './create_figure_dialog';
import EditFigureAvatarDialog from './edit_figure_avatar_dialog';
import EditFigureDialog from './edit_figure_dialog';

const Style = styled.div`
  ${cmsPage};
  display: flex;
`;

const Figure = () => (
  <Style>
    <FigureList />
    <Action />

    <CreateFigureDialog />
    <EditFigureAvatarDialog />
    <EditFigureDialog />
  </Style>
);

export default Figure;
