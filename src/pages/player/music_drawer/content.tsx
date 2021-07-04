import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import scrollbarAsNeeded from '@/style/scrollbar_as_needed';
import { MusicType } from '@/constants/music';
import Avatar from '@/components/avatar';
import Action from './action';
import Lyric from './lyric';
import Fork from './fork';
import MusicInfo from './music_info';
import Instrument from './instrument';
import useMusicOperate from '../use_music_operate';
import { Music } from '../constants';
import { COVER_SIZE, PADDING } from './constants';

const Style = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: ${PADDING}px;
  box-sizing: border-box;
  overflow: auto;
  ${scrollbarAsNeeded}
  >.content {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

const Content = ({
  music,
  onClose,
  style,
}: {
  music: Music;
  onClose: () => void;
  style: unknown;
}) => {
  const { onPlay, onAddToPlayqueue, onAddToMusicbill, onOperate, onWatchMv } =
    useMusicOperate(music, onClose);
  return (
    <Style style={style}>
      <div className="content">
        <Avatar animated src={music.cover} size={COVER_SIZE} />
        <MusicInfo music={music} />
        <Action
          music={music}
          onPlay={onPlay}
          onAddToPlayqueue={onAddToPlayqueue}
          onAddToMusicbill={onAddToMusicbill}
          onOperate={onOperate}
          onWatchMv={onWatchMv}
        />
        <Fork music={music} />
        {music.type === MusicType.NORMAL ? (
          <Lyric music={music} />
        ) : (
          <Instrument />
        )}
      </div>
    </Style>
  );
};

export default Content;
