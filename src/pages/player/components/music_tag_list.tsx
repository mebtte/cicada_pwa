import React from 'react';
import styled from 'styled-components';

import Tag, { Type } from '@/components/tag';
import { Music } from '@/constants/music';

const Style = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const MusicTagList = ({
  music,
  ...props
}: {
  music: Music;
  [key: string]: any;
}) => {
  const { hq, ac, mvLink, forkFrom } = music;
  return (
    <Style {...props}>
      {hq ? <Tag type={Type.HQ} /> : null}
      {ac ? <Tag type={Type.AC} /> : null}
      {mvLink ? <Tag type={Type.MV} /> : null}
      {forkFrom.length ? <Tag type={Type.FORK_FROM} /> : null}
    </Style>
  );
};

export default MusicTagList;
