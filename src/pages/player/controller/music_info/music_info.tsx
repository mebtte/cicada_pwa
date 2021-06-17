import React from 'react';

import Container from './container';
import Singer from '../../components/singer';
import MusicTagList from '../../components/music_tag_list';
import { Music as MusicType } from '../../constants';

const MusicInfo = ({
  music,
  onViewMusic,
  ...props
}: {
  music: MusicType;
  onViewMusic: () => void;
  [key: string]: any;
}) => {
  const { name, singers } = music;
  return (
    <Container {...props}>
      <div className="text">
        <span className="name" onClick={onViewMusic}>
          {name}
        </span>
        <span className="singers">
          {singers.length ? (
            singers.map((s) => <Singer key={s.id} singer={s} />)
          ) : (
            <Singer />
          )}
        </span>
      </div>
      <MusicTagList music={music} />
    </Container>
  );
};

export default MusicInfo;
