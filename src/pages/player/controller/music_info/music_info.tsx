import React from 'react';

import { Music as MusicType } from '@/constants/music';
import Tag, { Type } from '@/components/tag';
import Container from './container';
import Singer from '../../component/singer';

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
        {hq ? <Tag type={Type.HQ} /> : null}
        {ac ? <Tag type={Type.AC} /> : null}
      </div>
    </Container>
  );
};

export default MusicInfo;
