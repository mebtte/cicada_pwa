import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PLAYER_PATH } from '@/constants/route';
import getRandomCover from '@/utils/get_random_cover';
import Avatar from '@/components/avatar';
import useMusicOperate from '../use_music_operate';
import Context from '../context';
import Progress from './progress';
import MusicInfo from './music_info';
import Action from './action';
import { COVER_SIZE } from './constant';

const Style = styled.div`
  z-index: 2;
  height: 60px;
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 0 20px 4px 20px;
  > .cover-wrapper {
    &:focus {
      outline: none;
    }
    > .cover {
      cursor: pointer;
    }
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

const Controller = () => {
  const [initialCover] = useState(getRandomCover());
  const { playqueue, currentPlayqueuePosition } = useContext(Context);
  const queueMusic = playqueue[currentPlayqueuePosition];
  const { onView, onWatchMv, onAddToMusicbill, onAddToPlayqueue, onOperate } =
    useMusicOperate(queueMusic ? queueMusic.music : null);

  return (
    <Style>
      <Link className="cover-wrapper" to={PLAYER_PATH.LYRIC}>
        <Avatar
          className="cover"
          animated
          size={COVER_SIZE}
          src={queueMusic ? queueMusic.music.cover : initialCover}
        />
      </Link>
      <div className="right">
        <Progress />
        <div className="right-bottom">
          <MusicInfo
            music={queueMusic ? queueMusic.music : null}
            onViewMusic={onView}
            onWatchMv={onWatchMv}
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
