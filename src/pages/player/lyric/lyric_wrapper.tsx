import React from 'react';
import styled from 'styled-components';
import { useTransition } from 'react-spring';

import { RequestStatus } from '@/constants';
import { Music, MusicType } from '@/constants/music';
import ErrorCard from '@/components/error_card';
import useLrc from '../use_lrc';
import { Empty } from './constant';
import CardContainer from './card_container';
import Skeleton from './skeleton';
import Lyric from './lyric';

const STATUS = {
  ...RequestStatus,
  INSTRUMENT: 'instrument',
  EMPTY: 'empty',
};
const Style = styled.div`
  flex: 1;
  position: relative;
`;
const cardStyle = {
  width: '100%',
  height: '100%',
};

const Wrapper = ({ music }: { music: Music }) => {
  const { status, reload, lrc } = useLrc(music);
  const actualStatus =
    // eslint-disable-next-line no-nested-ternary
    music.type === MusicType.INSTRUMENT
      ? STATUS.INSTRUMENT
      : status === RequestStatus.SUCCESS && !lrc
      ? STATUS.EMPTY
      : status;
  const transitions = useTransition(actualStatus, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });
  return (
    <Style>
      {transitions((style, s) => {
        if (s === STATUS.SUCCESS) {
          return <Lyric style={style} lrc={lrc} />;
        }
        if (s === STATUS.LOADING) {
          return <Skeleton style={style} />;
        }
        if (s === STATUS.INSTRUMENT) {
          return (
            <CardContainer style={style}>
              <Empty>纯音乐, 暂无歌词</Empty>
            </CardContainer>
          );
        }
        if (s === STATUS.EMPTY) {
          return (
            <CardContainer style={style}>
              <Empty>暂未收录歌词</Empty>
            </CardContainer>
          );
        }
        return (
          <CardContainer style={style}>
            <ErrorCard
              errorMessage="获取歌词失败"
              retry={reload}
              style={cardStyle}
            />
          </CardContainer>
        );
      })}
    </Style>
  );
};

export default Wrapper;
