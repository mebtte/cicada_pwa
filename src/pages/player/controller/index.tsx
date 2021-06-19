import React, { useContext } from 'react';
import styled from 'styled-components';

import getRandomCover from '@/utils/get_random_cover';
import Avatar from '@/components/avatar';
import useMusicOperate from '../use_music_operate';
import Context from '../context';
import Progress from './progress';
import MusicInfo from './music_info';
import Action from './action';
import { COVER_SIZE } from './constant';
import eventemitter, { EventType } from '../eventemitter';

const INITIAL_COVER = getRandomCover();
const Style = styled.div`
  z-index: 3;
  height: 60px;
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 0 20px 4px 20px;
  background: rgb(255 255 255 / 0.75);
  > .cover {
    cursor: pointer;
  }
  > .right {
    flex: 1;
    min-width: 0;
    margin-left: 15px;
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
const openLyric = () => eventemitter.emit(EventType.OPEN_LYRIC);

const Controller = () => {
  const { playqueue, currentPlayqueuePosition } = useContext(Context);
  const queueMusic = playqueue[currentPlayqueuePosition];
  const { onView, onAddToMusicbill, onAddToPlayqueue, onOperate } =
    useMusicOperate(queueMusic ? queueMusic.music : null);

  return (
    <Style>
      <Avatar
        className="cover"
        animated
        size={COVER_SIZE}
        src={queueMusic ? queueMusic.music.cover : INITIAL_COVER}
        onClick={openLyric}
      />
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
    </Style>
  );
};

export default Controller;
