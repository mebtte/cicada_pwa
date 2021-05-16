import React, { useState } from 'react';
import styled from 'styled-components';

import getRandomCover from '../../util/get_random_cover';
import { IS_ELECTRON, IS_WINDOWS } from '../../constant';
import PageContainer from '../page_container';
import Content from './content';
import AppRegion from './app_region';
import WindowsAction from './windows_action';

const Style = styled(PageContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
`;

const Signin = () => {
  const [cover] = useState(getRandomCover());
  return (
    <Style style={{ backgroundImage: `url(${cover})` }}>
      {IS_ELECTRON && <AppRegion />}
      {IS_ELECTRON && IS_WINDOWS && <WindowsAction />}
      <Content />
    </Style>
  );
};

export default React.memo(Signin);
