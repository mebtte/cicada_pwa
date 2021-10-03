import React from 'react';
import styled from 'styled-components';

import HorizontalDrawer, { Direction } from '@/components/horizontal_drawer';
import useOpen from './use_open';
import Content from '../content';
import eventemitter, { EventType } from '../../eventemitter';
import scrollbarNever from '@/style/scrollbar_never';

const bodyProps = {
  style: {
    width: 240,
  },
};
const StyledContent = styled(Content)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  overflow: auto;
  ${scrollbarNever}
`;
const onClose = () => eventemitter.emit(EventType.CLOSE_SIDEBAR, {});

const Small = () => {
  const open = useOpen();
  return (
    <HorizontalDrawer
      open={open}
      onClose={onClose}
      bodyProps={bodyProps}
      direction={Direction.LEFT}
    >
      <StyledContent />
    </HorizontalDrawer>
  );
};

export default Small;
