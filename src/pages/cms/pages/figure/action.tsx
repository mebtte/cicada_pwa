import React from 'react';
import styled from 'styled-components';

import Tooltip, { Placement } from '@/components/tooltip';
import IconButton, { Name } from '@/components/icon_button';
import eventemitter, { EventType } from './eventemitter';

const Style = styled.div`
  padding: 20px 0;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const openCreateFigureDialog = () =>
  eventemitter.emit(EventType.OPEN_CREATE_FIGURE_DIALOG);

const Action = () => (
  <Style>
    <Tooltip title="创建角色" placement={Placement.LEFT}>
      <IconButton name={Name.PLUS_OUTLINE} onClick={openCreateFigureDialog} />
    </Tooltip>
  </Style>
);

export default Action;
