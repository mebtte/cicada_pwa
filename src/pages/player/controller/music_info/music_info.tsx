import React from 'react';
import { useHistory } from 'react-router-dom';

import { PLAYER_PATH } from '@/constants/route';
import { Music as MusicType } from '@/constants/music';
import Tag, { Type } from '@/components/tag';
import Container from './container';
import Singer from '../../components/singer';

const tagStyle = {
  cursor: 'pointer',
};

const MusicInfo = ({
  music,
  onViewMusic,
  onWatchMv,
  ...props
}: {
  music: MusicType;
  onViewMusic: () => void;
  onWatchMv: () => void;
  [key: string]: any;
}) => {
  const history = useHistory();
  const { name, singers, hq, ac, mvLink } = music;
  const toSetting = () => history.push(PLAYER_PATH.SETTING);
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
      <div className="tags">
        {hq ? (
          <Tag type={Type.HQ} style={tagStyle} onClick={toSetting} />
        ) : null}
        {ac ? (
          <Tag type={Type.AC} style={tagStyle} onClick={toSetting} />
        ) : null}
        {mvLink ? (
          <Tag type={Type.MV} style={tagStyle} onClick={onWatchMv} />
        ) : null}
      </div>
    </Container>
  );
};

export default MusicInfo;
