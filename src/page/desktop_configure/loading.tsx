import React from 'react';
import styled from 'styled-components';

import CircularLoader from '@/component/circular_loader';
import RouteContainer from '../route_container';

const Style = styled(RouteContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => (
  <Style>
    <CircularLoader />
  </Style>
);

export default Loading;
