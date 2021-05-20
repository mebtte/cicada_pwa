import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PLAYER_PATH } from '@/constant/route';
import getRandomCover from '@/utils/get_random_cover';
import Avatar from '@/component/avatar';
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
    > .right-bottom {
      display: flex;
      align-items: center;
      margin: 3px 0 0 0;
    }
  }
`;

const Controller = () => {
  const [initialCover] = useState(getRandomCover());
  const { playqueue, currentPlayqueuePosition } = useContext(Context);
  const music = playqueue[currentPlayqueuePosition];
  const {
    onView,
    onWatchMv,
    onAddToMusicbill,
    onAddToPlayqueue,
    onOperate,
  } = useMusicOperate(music);

  return (
    <Style>
      <Link className="cover-wrapper" to={PLAYER_PATH.LYRIC}>
        <Avatar
          className="cover"
          animated
          size={COVER_SIZE}
          src={music ? music.cover : initialCover}
        />
      </Link>
      <div className="right">
        <Progress />
        <div className="right-bottom">
          <MusicInfo music={music} onViewMusic={onView} />
          <Action
            music={music}
            onWatchMv={onWatchMv}
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
