import React from 'react';

import IconButton, { Name } from '@/components/icon_button';
import { MusicWithIndex } from '@/constants/music';
import { Figure } from '@/constants/figure';
import useMusicOperate from '../../use_music_operate';
import Container from './container';
import Singer from '../singer';

const ACTION_SIZE = 22;
const renderSinger = (s: Figure) => <Singer key={s.id} singer={s} />;

const Music = ({
  listMusic,
  style,
}: {
  listMusic: MusicWithIndex;
  style?: React.CSSProperties;
}) => {
  const {
    onPlay,
    onAddToMusicbill,
    onAddToPlayqueue,
    onOperate,
    onView,
  } = useMusicOperate(listMusic.music);
  const {
    index,
    music: { name, alias, singers },
  } = listMusic;
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
