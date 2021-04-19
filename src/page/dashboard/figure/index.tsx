import React from 'react';
import styled from 'styled-components';

import { route } from '../style';

import FigureDetail from './figure_detail';
import FigureList from './figure_list';
import Action from './action';
import CreateDialog from './create_dialog';

const Style = styled.div`
  ${route};
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
