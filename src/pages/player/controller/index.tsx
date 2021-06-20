import React, { useContext } from 'react';
import styled from 'styled-components';

import getRandomCover from '@/utils/get_random_cover';
import Avatar from '@/components/avatar';
import useMusicOperate from '../use_music_operate';
import Context from '../context';
import Progress from './progress';
import MusicInfo from './music_info';
import Action from './action';
import { CONTROLLER_HEIGHT } from '../constants';
import eventemitter, { EventType } from '../eventemitter';

const INITIAL_COVER = getRandomCover();
const Style = styled.div`
  z-index: 3;
  height: ${CONTROLLER_HEIGHT}px;
  display: flex;
  align-items: flex-end;
  gap: 20px;
  box-sizing: border-box;
  padding: 4px 20px;
  background: rgb(255 255 255 / 0.7);
  > .cover {
    cursor: pointer;
    border: 1px solid var(--color-primary);
  }
  > .right {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    > .right-bottom {
      display: flex;
      align-items: center;
      gap: 15px;
      margin: 5px 0 0 0;
      overflow: visible;
    }
  }
`;
const openLyric = () => eventemitter.emit(EventType.TOGGEL_LYRIC);

const Controller = () => {
  const { playqueue, currentPlayqueuePosition } = useContext(Context);
  const queueMusic = playqueue[currentPlayqueuePosition];
  const { onView, onAddToMusicbill, onAddToPlayqueue, onOperate } =
    useMusicOperate(queueMusic ? queueMusic.music : null);

  return (
    <Style>
      <div className="right">
        <Progress />
        <div className="right-bottom">
          <MusicInfo
            music={queueMusic ? queueMusic.music : null}
            onViewMusic={onView}
          />
          <Action
            onAddToMusicbill={onAddToMusicbill}
            onAddToPlayqueue={onAddToPlayqueue}
            onOperate={onOperate}
          />
        </div>
      </div>
      <Avatar
        className="cover"
        animated
        size={70}
        src={queueMusic ? queueMusic.music.cover : INITIAL_COVER}
        onClick={openLyric}
      />
    </Style>
  );
};

export default Controller;
