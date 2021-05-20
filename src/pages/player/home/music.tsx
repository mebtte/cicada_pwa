import React from 'react';

import { Music as MusicType } from '@/constants/music';
import IconButton, { Name } from '@/components/icon_button';
import MusicCard from './music_card';
import Cover from './cover';
import Singer from '../component/singer';
import useMusicOperate from '../use_music_operate';

const ACTION_SIZE = 20;

const Music = ({
  music,
  containerWidth,
}: {
  music: MusicType;
  containerWidth: number;
}) => {
  const {
    onView,
    onPlay,
    onAddToPlayqueue,
    onAddToMusicbill,
    onOperate,
  } = useMusicOperate(music);
  const { id, cover, name, singers } = music;
  return (
    <MusicCard key={id} containerWidth={containerWidth}>
      <div className="cover-area">
        <Cover src={cover} onClick={onView} />
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
      </div>
      <button type="button" className="name" onClick={onView}>
        {name}
      </button>
      <div className="singers">
        {singers.map((s) => (
          <Singer key={s.id} singer={s} />
        ))}
      </div>
    </MusicCard>
  );
};

export default Music;
