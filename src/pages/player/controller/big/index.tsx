import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';

import getRandomCover from '@/utils/get_random_cover';
import AnimateCover from '@/components/animate_cover';
import Context from '../../context';
import { QueueMusic } from '../../constants';
import eventemitter, { EventType } from '../../eventemitter';
import Info from './info';
import Action from './action';

const COVER_SIZE = 64;

const Style = styled.div`
  position: relative;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px;

  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px 20px 2px 20px;

  > .left {
    flex: 1;
    min-width: 0;

    > .bottom {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  > .cover-placeholder {
    width: ${COVER_SIZE}px;
  }

  > .cover {
    position: absolute;
    right: 20px;
    bottom: 5px;

    cursor: pointer;
    border: 1px solid var(--color-primary);
  }
`;
const toggleLyric = () => eventemitter.emit(EventType.TOGGEL_LYRIC, {});

const Big = () => {
  const { playqueue, currentPlayqueuePosition, audioPaused, audioLoading } =
    useContext(Context);
  const queueMusic = playqueue[currentPlayqueuePosition] as QueueMusic | null;

  const defaultCover = useMemo(getRandomCover, []);

  return (
    <Style>
      <div className="left">
        <div className="bottom">
          <Info music={queueMusic ? queueMusic.music : null} />
          <Action
            music={queueMusic ? queueMusic.music : null}
            paused={audioPaused}
            loading={audioLoading}
          />
        </div>
      </div>
      <div className="cover-placeholder" />
      <AnimateCover
        className="cover"
        src={queueMusic ? queueMusic.music.cover : defaultCover}
        alt="cover"
        size={COVER_SIZE}
        onClick={toggleLyric}
      />
    </Style>
  );
};

export default Big;
