import React, { useContext } from 'react';
import styled from 'styled-components';

import electron from '@/platform/electron';
import scrollbar from '@/style/scrollbar';
import Context from '../../context';
import PlayMode from './play_mode';
import GlobalShortcut from './global_shortcut';
import Volume from './volume';
import Feedback from './feedback';

const Style = styled.div`
  width: 100%;
  height: 100%;
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
      <Feedback />
    </Style>
  );
};

export default React.memo(Setting);
