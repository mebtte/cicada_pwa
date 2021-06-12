import React from 'react';
import styled from 'styled-components';

import { MusicType } from '@/constants/music';
import Avatar from '@/components/avatar';
import Drawer from '@/components/drawer';
import useMusicPopup from './use_music_popup';
import useMusicOperate from '../use_music_operate';
import Action from './action';
import Lyric from './lyric';
import ForkFrom from './fork_from';
import MusicInfo from './music_info';
import Instrument from './instrument';

const COVER_SIZE = 320;
const PADDING = 20;
const bodyProps = {
  style: {
    width: COVER_SIZE + PADDING * 2,
    padding: PADDING,
    overflow: 'auto',
  },
};
const Style = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MusicDrawer = () => {
  const { open, onClose, music } = useMusicPopup();
  const { onPlay, onAddToPlayqueue, onAddToMusicbill, onOperate, onWatchMv } =
    useMusicOperate(music, onClose);
  return (
    <Drawer open={open} onClose={onClose} bodyProps={bodyProps}>
      {music ? (
        <Style>
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
          {music.forkFrom.length ? <ForkFrom music={music} /> : null}
          {music.type === MusicType.NORMAL ? (
            <Lyric music={music} />
          ) : (
            <Instrument />
          )}
        </Style>
      ) : null}
    </Drawer>
  );
};

export default React.memo(MusicDrawer);
