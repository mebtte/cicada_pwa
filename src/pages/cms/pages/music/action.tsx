import React from 'react';
import styled from 'styled-components';

import useHistory from '@/utils/use_history';
import IconButton, { Name } from '@/components/icon_button';
import Tooltip, { Placement } from '@/components/tooltip';
import { Query } from './constants';

const Style = styled.div`
  padding: 20px 0;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Action = () => {
  const history = useHistory();

  const onCreateMusic = () =>
    history.push({
      query: {
        [Query.CREATE_MUSIC_DIALOG_OPEN]: 1,
      },
    });
  return (
    <Style>
      <Tooltip title="创建音乐" placement={Placement.LEFT}>
        <IconButton name={Name.PLUS_OUTLINE} onClick={onCreateMusic} />
      </Tooltip>
    </Style>
  );
};

export default Action;
