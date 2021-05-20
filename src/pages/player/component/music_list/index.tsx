import React from 'react';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';

import { RequestStatus } from '@/constant';
import { MusicWithIndex } from '@/constant/music';
import Empty from '@/components/empty';
import ErrorCard from '@/components/error_card';
import MusicList from './music_list';
import Skeleton from './skeleton';
import { containerStyle } from './constant';

const TRANSITION = {
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
};
const Style = styled.div`
  position: relative;
`;
const AnimatedDiv = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
const STATUS = {
  ...RequestStatus,
  EMPTY: 'empty',
};

interface Props {
  status: RequestStatus;
  musicList: MusicWithIndex[];
  reload: () => void;
  emptyDescription?: string;
  style?: React.CSSProperties;
  musicListProps?: any;
}

const Wrapper = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      status,
      musicList,
      reload,
      emptyDescription = '空的音乐列表',
      musicListProps,
      style,
    }: Props,
    ref,
  ) => {
    const actualStatus =
      status === STATUS.SUCCESS && !musicList.length ? STATUS.EMPTY : status;
    const transitons = useTransition(actualStatus, null, TRANSITION);
    return (
      <Style style={style}>
        {transitons.map(({ item: s, key, props: innerStyle }) => {
          let content = null;
          switch (s) {
            case STATUS.SUCCESS: {
              content = (
                <MusicList
                  musicList={musicList}
                  ref={ref}
                  {...musicListProps}
                />
              );
              break;
            }
            case STATUS.EMPTY: {
              content = (
                <Empty style={containerStyle} description={emptyDescription} />
              );
              break;
            }
            case STATUS.LOADING: {
              content = <Skeleton />;
              break;
            }
            default: {
              content = (
                <ErrorCard
                  errorMessage="获取音乐列表失败"
                  retry={reload}
                  style={containerStyle}
                />
              );
            }
          }
          return (
            <AnimatedDiv key={key} style={innerStyle}>
              {content}
            </AnimatedDiv>
          );
        })}
      </Style>
    );
  },
);

export default Wrapper;
