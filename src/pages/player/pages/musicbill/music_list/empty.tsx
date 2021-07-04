import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import Empty from '@/components/empty';

const Style = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = ({ style }: { style: unknown }) => (
  <Style style={style}>
    <Empty description="空的歌单" />
  </Style>
);

export default Wrapper;
