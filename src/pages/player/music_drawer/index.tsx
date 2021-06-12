import React from 'react';
import styled from 'styled-components';

import Avatar from '@/components/avatar';
import Drawer from '@/components/drawer';
import styledScrollbar from '@/style/styled_scrollbar';
import useMusicPopup from './use_music_popup';
import useMusicOperate from '../use_music_operate';
import Singer from '../components/singer';
import Action from './action';
import Lyric from './lyric';
import MusicTagList from '../components/music_tag_list';

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
  > .top {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    > .name {
      font-size: 24px;
      line-height: 1.3;
    }
  }
  > .alias {
    font-size: 12px;
    margin: 2px 0 10px 0;
    color: rgb(155 155 155);
  }
  > .singers {
    ${styledScrollbar}
    overflow: auto;
    font-size: 12px;
    white-space: nowrap;
  }
`;

const MusicDrawer = () => {
  const { open, onClose, music } = useMusicPopup();
  const { onPlay, onAddToPlayqueue, onAddToMusicbill, onOperate, onWatchMv } =
    useMusicOperate(music, onClose);
  return (
    <Drawer open={open} onClose={onClose} bodyProps={bodyProps}>
      <Avatar animated src={music ? music.cover : ''} size={COVER_SIZE} />
      {music ? (
        <Style>
          <div className="top">
            <div className="name">{music.name}</div>
            <MusicTagList music={music} />
          </div>
          <div className="alias">{music.alias}</div>
          <div className="singers">
            {music.singers.length ? (
              music.singers.map((s) => <Singer key={s.id} singer={s} />)
            ) : (
              <Singer />
            )}
          </div>
          <Action
            music={music}
            onPlay={onPlay}
            onAddToPlayqueue={onAddToPlayqueue}
            onAddToMusicbill={onAddToMusicbill}
            onOperate={onOperate}
            onWatchMv={onWatchMv}
          />
          {music ? <Lyric music={music} /> : null}
        </Style>
      ) : null}
    </Drawer>
  );
};

export default React.memo(MusicDrawer);
