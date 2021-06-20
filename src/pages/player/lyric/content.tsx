import React, { useContext } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useTransition, animated } from 'react-spring';
import { Lrc, LyricLine as LyricLineType } from 'react-lrc';

import noScrollbar from '@/style/no_scrollbar';
import { RequestStatus } from '@/constants';
import { MusicType } from '@/constants/music';
import useMusicLrc from '@/utils/use_music_lrc';
import Avatar from '@/components/avatar';
import { CONTROLLER_HEIGHT, Music } from '../constants';
import PlayerContext from '../context';
import useAudioCurrentMillisecond from '../use_audio_current_millisecond';

const COVER_SIZE = 300;
enum State {
  INSTRUMENT = 1,
  TRUNTABLE = 2,
}
const Container = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - ${CONTROLLER_HEIGHT}px);
`;
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  } 100% {
    transform: rotate(360deg);
  }
`;
const CoverBox = styled(Container)<{ paused: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  > .cover {
    overflow: hidden;
    border-radius: 50%;
    border: 30px solid #000;
    box-shadow: 0 0 0 5px rgb(155 155 155);
    animation: ${rotate} 33s linear infinite;
  }
  ${({ paused }) => css`
    > .cover {
      animation-play-state: ${paused ? 'paused' : 'running'};
    }
  `}
`;
const TextBox = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  > .text {
    background: #fff;
    color: var(--text-color-primary);
    border-radius: 4px;
    padding: 5px 15px;
    font-size: 12px;
    white-space: nowrap;
    > .retry {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
const StyledLrc = styled(Lrc)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${noScrollbar}
`;
const LyricLine = styled.div<{ active: boolean }>`
  text-align: center;
  padding: 5px 0;
  > .content {
    max-width: 80%;
    line-height: 1.5;
    display: inline-block;
    border-radius: 5px;
    padding: 7px 15px 5px 15px;
    font-size: 16px;
    text-align: center;
    transition: 300ms;
  }
  ${({ active }) => css`
    > .content {
      color: ${active ? 'var(--color-primary)' : 'var(--text-color-primary)'};
      background: rgb(255 255 255 / ${active ? 1 : 0.7});
    }
  `}
`;

const lrcLineRenderer = ({
  active,
  line,
}: {
  active: boolean;
  line: LyricLineType;
}) => (
  <LyricLine active={active}>
    <div className="content">{line.content}</div>
  </LyricLine>
);
const LrcDisplay = ({ lrc, style }: { lrc: string; style: unknown }) => {
  const currentMillisecond = useAudioCurrentMillisecond();
  return (
    <Container style={style}>
      <StyledLrc
        lrc={lrc}
        lineRenderer={lrcLineRenderer}
        currentMillisecond={currentMillisecond}
        topBlank
        bottomBlank
      />
    </Container>
  );
};

const Content = ({
  turntable,
  toggleTurntable,
  music,
}: {
  turntable: boolean;
  toggleTurntable: () => void;
  music: Music;
}) => {
  const { audioPaused } = useContext(PlayerContext);
  const { lrc, retry } = useMusicLrc(music.id);
  let state: any = lrc;
  if (turntable) {
    state = State.TRUNTABLE;
  } else if (music.type === MusicType.INSTRUMENT) {
    state = State.INSTRUMENT;
  }
  const transitions = useTransition(state, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });
  return transitions((style, l) => {
    if (l === State.TRUNTABLE) {
      return (
        <CoverBox style={style} paused={audioPaused ? '1' : ''}>
          <div className="cover" onClick={toggleTurntable}>
            <Avatar animated src={music.cover} size={COVER_SIZE} />
          </div>
        </CoverBox>
      );
    }
    if (l === State.INSTRUMENT) {
      return (
        <TextBox style={style}>
          <div className="text" onClick={toggleTurntable}>
            纯音乐, 无歌词
          </div>
        </TextBox>
      );
    }
    if (l.status === RequestStatus.SUCCESS) {
      if (l.value) {
        return <LrcDisplay style={style} lrc={l.value} />;
      }
      return (
        <TextBox style={style}>
          <div className="text" onClick={toggleTurntable}>
            暂未收录歌词
          </div>
        </TextBox>
      );
    }
    if (l.status === RequestStatus.ERROR) {
      return (
        <TextBox style={style}>
          <div className="text">
            获取歌词失败,&nbsp;
            <span className="retry" onClick={retry}>
              重新获取
            </span>
          </div>
        </TextBox>
      );
    }
    return null;
  });
};

export default Content;
