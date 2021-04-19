import React from 'react';

import IconButton, { Name } from '@/component/icon_button';
import { MusicWithIndex } from '@/constant/music';
import { Figure } from '@/constant/figure';
import useMusicOperate from '../../use_music_operate';
import Container from './container';
import Singer from '../singer';

const ACTION_SIZE = 22;
const renderSinger = (s: Figure) => <Singer key={s.id} singer={s} />;

const Music = ({
  music,
  style,
}: {
  music: MusicWithIndex;
  style?: React.CSSProperties;
}) => {
  const {
    onPlay,
    onAddToMusicbill,
    onAddToPlayqueue,
    onOperate,
    onView,
  } = useMusicOperate(music);
  const { index, name, alias, singers } = music;
  return (
    <Container style={style}>
      <div className="index">{index}.</div>
      <div className="info">
        <button type="button" className="name" onClick={onView} title={alias}>
          {name}
        </button>
        <span className="singers">
          {singers.length ? singers.map(renderSinger) : <Singer />}
        </span>
      </div>
      <div className="actions">
        <IconButton
          name={Name.PLAY_OUTLINE}
          size={ACTION_SIZE}
          onClick={onPlay}
        />
        <IconButton
          name={Name.INSERT_OUTLINE}
          size={ACTION_SIZE}
          onClick={onAddToPlayqueue}
        />
        <IconButton
          name={Name.ADD_TO_OUTLINE}
          size={ACTION_SIZE}
          onClick={onAddToMusicbill}
        />
        <IconButton
          name={Name.MORE_OUTLINE}
          size={ACTION_SIZE}
          onClick={onOperate}
        />
      </div>
    </Container>
  );
};

export default Music;
