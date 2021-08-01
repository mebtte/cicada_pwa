import React from 'react';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';

import { RequestStatus } from '@/constants';
import ErrorCard from '@/components/error_card';
import { MusicList as MusicListType } from '../constants';
import { containerStyle } from './constants';
import Skeleton from './skeleton';
import MusicList from './music_list';

const Style = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
`;
const ErrorCardContainer = styled(animated.div)`
  ${containerStyle}
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = ({
  musicList,
  reload,
}: {
  musicList: MusicListType;
  reload: () => void;
}) => {
  const transitons = useTransition(musicList, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <Style>
      {transitons((style, ml) => {
        if (ml.status === RequestStatus.ERROR) {
          return (
            <ErrorCardContainer style={style}>
              <ErrorCard errorMessage="获取音乐列表失败" retry={reload} />
            </ErrorCardContainer>
          );
        }
        if (ml.status === RequestStatus.LOADING) {
          return <Skeleton style={style} />;
        }
        if (ml.status === RequestStatus.SUCCESS) {
          return <MusicList style={style} musicList={ml.value} />;
        }
        return null;
      })}
    </Style>
  );
};

export default Wrapper;
