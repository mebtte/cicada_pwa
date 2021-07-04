import React from 'react';
import styled from 'styled-components';

import { MusicType } from '@/constants/music';
import { IS_ELECTRON, IS_WINDOWS } from '@/constants';
import IconButton, { Name } from '@/components/icon_button';
import {
  minimizePlayerWindow,
  hidePlayerWindow,
} from '@/platform/electron_new';
import { Music } from '../constants';

const ACTION_SIZE = 24;
const Style = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 4px;
  background: rgb(255 255 255 / 0.7);
  transition: 300ms;
  &:hover {
    background: rgb(255 255 255 / 1);
  }
  > .action {
    cursor: pointer;
    -webkit-app-region: no-drag;
  }
`;

const Action = ({
  music,
  toggleTurntable,
  onClose,
}: {
  music: Music;
  toggleTurntable: () => void;
  onClose: () => void;
}) => (
  <Style>
    <IconButton
      name={Name.EXCHANGE_OUTLINE}
      onClick={toggleTurntable}
      size={ACTION_SIZE}
      className="action"
      disabled={music.type === MusicType.INSTRUMENT}
    />
    <IconButton
      name={Name.DOWN_OUTLINE}
      onClick={onClose}
      size={ACTION_SIZE}
      className="action"
    />
    {IS_ELECTRON && IS_WINDOWS ? (
      <>
        <IconButton
          name={Name.MINIMIZE_OUTLINE}
          onClick={minimizePlayerWindow}
          size={ACTION_SIZE}
          className="action"
        />
        <IconButton
          name={Name.WRONG_OUTLINE}
          onClick={hidePlayerWindow}
          size={ACTION_SIZE}
          className="action"
        />
      </>
    ) : null}
  </Style>
);

export default Action;
