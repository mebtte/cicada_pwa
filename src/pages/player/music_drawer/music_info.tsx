import React from 'react';
import styled from 'styled-components';

import scrollbar from '@/style/styled_scrollbar';
import { Music } from '@/constants/music';
import Singer from '../components/singer';
import MusicTagList from '../components/music_tag_list';

const Style = styled.div`
  > .top {
    display: flex;
    align-items: center;
    gap: 10px;
    > .name {
      font-size: 22px;
      color: rgb(55 55 55);
      white-space: nowrap;
      overflow: auto;
      ${scrollbar}
      > .alias {
        margin-left: 5px;
        font-size: 14px;
        color: rgb(155 155 155);
      }
    }
  }
  > .singer-list {
    margin-top: 10px;
    overflow: auto;
    ${scrollbar}
    font-size: 12px;
    white-space: nowrap;
  }
`;

const MusicInfo = ({ music }: { music: Music }) => (
  <Style>
    <div className="top">
      <div className="name">
        {music.name}
        {music.alias ? <span className="alias">{music.alias}</span> : null}
      </div>
      <MusicTagList music={music} />
    </div>
    <div className="singer-list">
      {music.singers.length ? (
        music.singers.map((s) => <Singer key={s.id} singer={s} />)
      ) : (
        <Singer />
      )}
    </div>
  </Style>
);

export default MusicInfo;
