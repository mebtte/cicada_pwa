import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { Music } from '../../constants';
import MusicInfo from '../../components/music_info';

const Style = styled.div`
  transition: 1s;
  overflow: hidden;
  > .content {
    padding: 10px;
    border-radius: 4px;
    background-color: #f6f6f6;
    > .title {
      font-size: 12px;
      color: rgb(155 155 155);
      margin-bottom: 10px;
    }
    > .list {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
`;

const ForkMusicList = ({ forkMusicList }: { forkMusicList: Music[] }) => {
  const contentRef = useRef<HTMLDivElement>();
  const [maxHeight, setMaxHeight] = useState(0);
  useLayoutEffect(() => {
    setMaxHeight(contentRef.current.clientHeight);
  }, []);

  return (
    <Style style={{ maxHeight, opacity: maxHeight ? 1 : 0 }}>
      <div className="content" ref={contentRef}>
        <div className="title">被以下音乐二次创作</div>
        <div className="list">
          {forkMusicList.map((m) => (
            <MusicInfo key={m.id} music={m} />
          ))}
        </div>
      </div>
    </Style>
  );
};

export default ForkMusicList;
