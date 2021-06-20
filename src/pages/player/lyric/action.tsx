import React from 'react';
import styled from 'styled-components';

import { IS_ELECTRON, IS_WINDOWS } from '@/constants';
import IconButton, { Name } from '@/components/icon_button';
import {
  minimizePlayerWindow,
  hidePlayerWindow,
} from '@/platform/electron_new';

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
  > .action {
    -webkit-app-region: no-drag;
  }
`;

const Action = ({ onClose }: { onClose: () => void }) => {
  return (
    <Style>
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
};

export default Action;
