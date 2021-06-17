import React from 'react';
import styled from 'styled-components';

import scrollbar from '@/style/scrollbar';
import { Musicbill as MusicbillType, Music as MusicType } from '../constants';
import Musicbill from './musicbill';
import CreateMusicbill from './create_musicbill';

const Style = styled.div`
  flex: 1;
  min-height: 0;
  padding: 0 20px;
  overflow: auto;
  ${scrollbar}
  > .blank {
    height: 20px;
  }
`;

const MusicbillList = ({
  musicbillList,
  music,
}: {
  musicbillList: MusicbillType[];
  music?: MusicType;
}) => (
  <Style>
    {musicbillList.map((musicbill) => (
      <Musicbill key={musicbill.id} musicbill={musicbill} music={music} />
    ))}
    <CreateMusicbill />
    <div className="blank" />
  </Style>
);

export default MusicbillList;
