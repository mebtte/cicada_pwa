import React, { useMemo } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import getRandomCover from '@/utils/get_random_cover';
import { Musicbill as MusicbillType } from '@/pages/player/constants';
import Musicbill from './musicbill';

const Style = styled(animated.div)``;

const MusicbillList = ({
  musicbillList,
  style,
}: {
  musicbillList: MusicbillType[];
  style: unknown;
}) => {
  const coverForCreation = useMemo(getRandomCover, []);
  return (
    <Style style={style}>
      {musicbillList.map((musicbill) => (
        <Musicbill key={musicbill.id} cover={musicbill.cover} />
      ))}
      <Musicbill cover={coverForCreation} />
    </Style>
  );
};

export default MusicbillList;
