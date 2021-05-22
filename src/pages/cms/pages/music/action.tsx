import React from 'react';
import styled from 'styled-components';

import IconButton, { Name } from '@/components/icon_button';
import Tooltip, { Placement } from '@/components/tooltip';
import eventemitter, { EventType } from './eventemitter';

const Style = styled.div`
  padding: 20px 0;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const onCreateMusicDialog = () =>
  eventemitter.emit(EventType.OPEN_CREATE_MUSIC_DIALOG);

const Action = () => (
  <Style>
    <Tooltip title="创建音乐" placement={Placement.LEFT}>
      <IconButton name={Name.PLUS_OUTLINE} onClick={onCreateMusicDialog} />
    </Tooltip>
  </Style>
);

export default Action;
