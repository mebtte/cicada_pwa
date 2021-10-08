import React, { useMemo } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import Skeleton from '@/components/skeleton';
import getRandomInteger from '@/utils/get_random_integer';
import MusicbillContainer from './musicbill_container';
import { COVER_SIZE } from './constants';

const Style = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;
const preventDefault = (event) => event.preventDefault();

const Loading = ({ style }: { style: ReactSpringStyle }) => {
  const musicbillList = useMemo(
    () =>
      new Array(5).fill(0).map(() => ({
        nameWidth: getRandomInteger(30, 80),
      })),
    [],
  );
  return (
    <Style style={style}>
      {musicbillList.map(({ nameWidth }, index) => (
        <MusicbillContainer
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          to="/musicbill_list_loading"
          onClick={preventDefault}
        >
          <Skeleton width={COVER_SIZE} height={COVER_SIZE} />
          <div className="label">
            <Skeleton width={nameWidth} />
          </div>
        </MusicbillContainer>
      ))}
    </Style>
  );
};

export default Loading;
