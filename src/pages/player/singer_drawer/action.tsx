import React from 'react';
import styled from 'styled-components';

import { RequestStatus } from '@/constant';
import Tooltip, { Placement } from '@/components/tooltip';
import IconButton, { Name } from '@/components/icon_button';

const ACTION_SIZE = 28;
const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;
const iconButtonStyle = {
  margin: '5px 0',
};

const Action = ({
  status,
  reload,
  addAllToPlaylist,
}: {
  status: RequestStatus;
  reload: () => void;
  addAllToPlaylist: () => void;
}) => (
  <Style>
    <Tooltip title="重新加载" placement={Placement.LEFT}>
      <IconButton
        name={Name.REFRESH_OUTLINE}
        size={ACTION_SIZE}
        onClick={reload}
        loading={status === RequestStatus.LOADING}
        style={iconButtonStyle}
      />
    </Tooltip>
    <Tooltip title="全部添加到歌单" placement={Placement.LEFT}>
      <IconButton
        name={Name.PLUS_OUTLINE}
        size={ACTION_SIZE}
        onClick={addAllToPlaylist}
        style={iconButtonStyle}
      />
    </Tooltip>
  </Style>
);

export default Action;
