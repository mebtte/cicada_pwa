import React from 'react';
import styled from 'styled-components';

import { Music as MusicType } from '@/constants/music';
import Tag from '@/components/tag';
import { MUSIC_TAG_COLOR } from '../../constants';
import Container from './container';
import Singer from '../../component/singer';

const StyledTag = styled(Tag)`
  margin-left: 5px;
`;

const MusicInfo = ({
  music,
  onViewMusic,
  ...props
}: {
  music: MusicType;
  onViewMusic: () => void;
  [key: string]: any;
}) => {
  const { name, singers, ac, hq } = music;
  return (
    <Container {...props}>
      <div className="text">
        <button type="button" className="name" onClick={onViewMusic}>
          {name}
        </button>
        <span className="singers">
          {singers.length ? (
            singers.map((s) => <Singer key={s.id} singer={s} />)
          ) : (
            <Singer />
          )}
        </span>
      </div>
      <div className="tags">
        {ac ? <StyledTag tag="ac" color={MUSIC_TAG_COLOR.AC} /> : null}
        {hq ? <StyledTag tag="hq" color={MUSIC_TAG_COLOR.HQ} /> : null}
      </div>
    </Container>
  );
};

export default MusicInfo;
