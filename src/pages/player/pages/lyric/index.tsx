import React, { useContext } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { ROOT_PATH } from '@/constants/route';
import Context from '../../context';
import Info from './info';
import Lyric from './lyric_wrapper';
import { QueueMusic } from '../../constants';

const Style = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  > .container {
    max-width: 720px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    padding: 0 40px;
  }
`;

const Wrapper = () => {
  const { playqueue, currentPlayqueuePosition } = useContext(Context);
  const queueMusic = playqueue[currentPlayqueuePosition] as QueueMusic | null;
  if (!queueMusic) {
    return <Redirect to={ROOT_PATH.PLAYER} />;
  }
  return (
    <Style>
      <div className="container">
        <Info music={queueMusic.music} />
        <Lyric music={queueMusic.music} />
      </div>
    </Style>
  );
};

export default React.memo(Wrapper);
