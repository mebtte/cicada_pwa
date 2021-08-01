import React, { useState } from 'react';
import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

import scrollbarAsNeeded from '@/style/scrollbar_as_needed';
import { MusicWithIndex } from '../../constants';
import Music from '../../components/music';
import { containerStyle } from './constants';

const Style = styled(animated.div)<{ topBoxShadow: number }>`
  ${containerStyle}

  overflow: auto;
  ${scrollbarAsNeeded}

  ${({ topBoxShadow }) => css`
    box-shadow: ${topBoxShadow
      ? 'inset 0px 5px 5px -5px rgb(0 0 0 / 10%)'
      : 'none'};
  `}
`;

const MusicList = ({
  style,
  musicList,
}: {
  style: unknown;
  musicList: MusicWithIndex[];
}) => {
  const [topBoxShadow, setTopBoxShadow] = useState(0);
  const onScroll: React.UIEventHandler<HTMLDivElement> = (event) => {
    const { scrollTop } = event.target as HTMLDivElement;
    return setTopBoxShadow(scrollTop === 0 ? 0 : 1);
  };
  return (
    <Style style={style} topBoxShadow={topBoxShadow} onScroll={onScroll}>
      {musicList.map((m) => (
        <Music key={m.index} musicWithIndex={m} />
      ))}
    </Style>
  );
};

export default MusicList;
