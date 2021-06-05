import React, { useMemo } from 'react';
import styled from 'styled-components';
import { parse } from 'react-lrc';
import dompurify from 'dompurify';

import ellipsis from '@/style/ellipsis';
import Music from '../../components/music';
import { Music as MusicType } from './constants';

const Style = styled.div`
  padding: 10px 20px;
  &:hover {
    background-color: #f9f9f9;
  }
  > .lyric {
    margin-top: 10px;
    font-size: 12px;
    color: rgb(155 155 155);
    ${ellipsis}
    > .line {
      &:not(:last-child) {
        margin-right: 10px;
      }
      > .highlight {
        color: var(--color-primary);
      }
    }
  }
`;
const musicStyle = {
  height: 'auto',
  padding: 0,
  backgroundColor: 'transparent',
};

const Wrapper = ({ keyword, music }: { keyword: string; music: MusicType }) => {
  const {
    music: { lrc },
  } = music;
  const lrcNode = useMemo(() => {
    const { lyrics } = parse(lrc, { trimStart: true, trimEnd: true });
    const matchIndex = lyrics.findIndex((l) => l.content.includes(keyword));
    const start = matchIndex - 1 < 0 ? 0 : matchIndex - 1;
    const end =
      matchIndex + 1 >= lyrics.length ? lyrics.length : matchIndex + 1;
    const matchLyrics = lyrics.slice(start, end + 1);
    return (
      <div
        className="lyric"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: dompurify.sanitize(
            matchLyrics
              .map(
                (l) =>
                  `<span class="line">${l.content.replace(
                    keyword,
                    (match) => `<span class="highlight">${match}</span>`,
                  )}</span>`,
              )
              .join(''),
          ),
        }}
      />
    );
  }, [lrc, keyword]);
  return (
    <Style>
      <Music musicWithIndex={music} style={musicStyle} />
      {lrcNode}
    </Style>
  );
};

export default Wrapper;
