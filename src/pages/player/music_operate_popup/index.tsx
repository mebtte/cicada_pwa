import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import Popup from '@/components/popup';
import { Name } from '@/components/icon';
import { Music as MusicType } from '@/constant/music';
import useMusicOperate from '../use_music_operate';
import eventemitter, { Type as EventType } from '../eventemitter';
import MusicInfo from '../component/music_info';
import MenuItem from './menu_item';

const MusicInfoWrapper = styled.div`
  padding: 10px 20px;
`;
const bodyProps = {
  style: {
    padding: '10px 0 5px 0',
  },
};

const MusicOperateDrawer = () => {
  const [open, setOpen] = useState(false);
  const [music, setMusic] = useState<MusicType>(null);
  const onClose = useCallback(() => setOpen(false), []);
  const {
    onPlay,
    onAddToPlayqueue,
    onAddToMusicbill,
    onAddToPlaylist,
    onWatchMv,
  } = useMusicOperate(music, onClose);

  useEffect(() => {
    const openListener = (m: MusicType) => {
      setMusic(m);
      setOpen(true);
    };
    const closeListener = () => setOpen(false);
    eventemitter.on(EventType.OPEN_MUSIC_OPERATE_POPUP, openListener);
    eventemitter.on(EventType.OPEN_MUSIC_DRAWER, closeListener);
    eventemitter.on(EventType.OPEN_SINGER_DRAWER, closeListener);
    return () => {
      eventemitter.off(EventType.OPEN_MUSIC_OPERATE_POPUP, openListener);
      eventemitter.off(EventType.OPEN_MUSIC_DRAWER, closeListener);
      eventemitter.off(EventType.OPEN_SINGER_DRAWER, closeListener);
    };
  }, []);

  return (
    <Popup open={open} onClose={onClose} bodyProps={bodyProps}>
      {music ? (
        <MusicInfoWrapper>
          <MusicInfo music={music} />
        </MusicInfoWrapper>
      ) : null}
      <MenuItem icon={Name.PLAY_OUTLINE} label="播放" onClick={onPlay} />
      <MenuItem
        icon={Name.INSERT_OUTLINE}
        label="下一首播放"
        onClick={onAddToPlayqueue}
      />
      <MenuItem
        icon={Name.ADD_TO_OUTLINE}
        label="添加到歌单"
        onClick={onAddToMusicbill}
      />
      <MenuItem
        icon={Name.PLUS_OUTLINE}
        label="添加到播放列表"
        onClick={onAddToPlaylist}
      />
      {music && music.mv ? (
        <MenuItem
          icon={Name.VIDEO_OUTLINE}
          label="观看MV"
          onClick={onWatchMv}
        />
      ) : null}
    </Popup>
  );
};

export default MusicOperateDrawer;
