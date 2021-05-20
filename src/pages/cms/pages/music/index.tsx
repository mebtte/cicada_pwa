import React from 'react';
import styled from 'styled-components';

import { cmsPage } from '../../style';
import Action from './action';
import CreateMusicDialog from './create_music_dialog';

const Style = styled.div`
  ${cmsPage};
  display: flex;
`;

const Music = () => (
  <Style>
    <Action />

    <CreateMusicDialog />
  </Style>
);

export default Music;
