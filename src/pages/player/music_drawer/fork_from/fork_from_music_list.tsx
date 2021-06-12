import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { Music } from '@/constants/music';
import MusicInfo from '../../components/music_info';

const Style = styled.div`
  transition: max-height 1s;
  > .content {
    padding: 10px;
    border-radius: 4px;
    background-color: #f9f9f9;
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

const ForkFromMusicList = ({
  forkFromMusicList,
}: {
  forkFromMusicList: Music[];
}) => {
  const contentRef = useRef<HTMLDivElement>();
  const [maxHeight, setMaxHeight] = useState(0);
  useLayoutEffect(() => {
    setMaxHeight(contentRef.current.clientHeight);
  }, []);

  return (
    <Style style={{ maxHeight }}>
      <div className="content" ref={contentRef}>
        <div className="title">翻唱自以下音乐</div>
        <div className="list">
          {forkFromMusicList.map((m) => (
            <MusicInfo key={m.id} music={m} />
          ))}
        </div>
      </div>
    </Style>
  );
};

export default ForkFromMusicList;
