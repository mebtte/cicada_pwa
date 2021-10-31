import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import { PLAYER_PATH } from '@/constants/route';
import { Musicbill as MusicbillType } from '@/pages/player/constants';
import Musicbill from './musicbill';

const Style = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const MusicbillList = ({
  musicbillList,
  style,
}: {
  musicbillList: MusicbillType[];
  style: ReactSpringStyle;
}) => (
  <Style style={style}>
    {musicbillList.map((musicbill) => (
      <Musicbill
        key={musicbill.id}
        to={PLAYER_PATH.MUSICBILL.replace(':id', musicbill.id)}
        cover={musicbill.cover}
        label={musicbill.name}
        publiz={musicbill.public}
      />
    ))}
  </Style>
);

export default MusicbillList;
