import React, { ReactNode } from 'react';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';

import { RequestStatus } from '@/constants';
import { MusicWithIndex } from '@/constants/music';
import Empty from '@/components/empty';
import ErrorCard from '@/components/error_card';
import MusicList from './music_list';
import Skeleton from './skeleton';
import { containerStyle } from './constant';

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
  errorMessage?: string;
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
      errorMessage = '获取音乐列表失败',
      musicListProps,
      style,
    }: Props,
    ref,
  ) => {
    const actualStatus =
      status === STATUS.SUCCESS && !musicList.length ? STATUS.EMPTY : status;
    const transitons = useTransition(actualStatus, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    });
    return (
      <Style style={style}>
        {transitons((innerStyle, s) => {
          let content: ReactNode = null;
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
                  errorMessage={errorMessage}
                  retry={reload}
                  style={containerStyle}
                />
              );
            }
          }
          return <AnimatedDiv style={innerStyle}>{content}</AnimatedDiv>;
        })}
      </Style>
    );
  },
);

export default Wrapper;