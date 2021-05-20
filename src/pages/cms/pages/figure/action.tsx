import React from 'react';
import styled from 'styled-components';

import useHistory from '@/utils/use_history';
import Tooltip, { Placement } from '@/components/tooltip';
import IconButton, { Name } from '@/components/icon_button';
import { Query } from './constants';

const Style = styled.div`
  background-color: white;
  padding: 20px 0;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Action = () => {
  const history = useHistory();
  const openCreateFigureDialog = () =>
    history.push({ query: { [Query.CREATE_FIGURE_DIALOG_OPEN]: 1 } });

  return (
    <Style>
      <Tooltip title="创建角色" placement={Placement.LEFT}>
        <IconButton name={Name.PLUS_OUTLINE} onClick={openCreateFigureDialog} />
      </Tooltip>
    </Style>
  );
};

export default Action;
