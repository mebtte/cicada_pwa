import React, { useContext } from 'react';
import styled from 'styled-components';

import electron from '@/platform/electron';
import scrollbar from '@/style/scrollbar';
import Context from '../context';
import { routeContainerStyle } from '../style';
import PlayMode from './play_mode';
import Logout from './logout';
import GlobalShortcut from './global_shortcut';
import Volume from './volume';

const Style = styled.div`
  ${routeContainerStyle}
  overflow: auto;
  ${scrollbar}
`;

const Setting = () => {
  const { playMode, volume } = useContext(Context);
  return (
    <Style>
      <PlayMode playMode={playMode} />
      <Volume volume={volume} />
      {electron ? <GlobalShortcut /> : null}
      <Logout />
    </Style>
  );
};

export default React.memo(Setting);
