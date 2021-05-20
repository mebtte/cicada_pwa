import React, { useContext } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { ROOT_PATH } from '@/constant/route';
import Context from '../context';
import { routeContainerStyle } from '../style';
import Info from './info';
import Lyric from './lyric_wrapper';

const Style = styled.div`
  ${routeContainerStyle}
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
  const music = playqueue[currentPlayqueuePosition];
  if (!music) {
    return <Redirect to={ROOT_PATH.PLAYER} />;
  }
  return (
    <Style>
      <div className="container">
        <Info music={music} />
        <Lyric music={music} />
      </div>
    </Style>
  );
};

export default React.memo(Wrapper);
