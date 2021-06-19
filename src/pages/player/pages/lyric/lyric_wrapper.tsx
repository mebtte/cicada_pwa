import React from 'react';
import styled from 'styled-components';
import { useTransition } from 'react-spring';

import { MusicType } from '@/constants/music';
import { RequestStatus } from '@/constants';
import ErrorCard from '@/components/error_card';
import useMusicLrc from '@/utils/use_music_lrc';
import { Empty } from './constant';
import CardContainer from './card_container';
import Skeleton from './skeleton';
import Lyric from './lyric';
import { Music } from '../../constants';

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
  const { lrc, retry } = useMusicLrc(music.id);
  const actualStatus =
    // eslint-disable-next-line no-nested-ternary
    music.type === MusicType.INSTRUMENT
      ? STATUS.INSTRUMENT
      : lrc.status === RequestStatus.SUCCESS && !lrc
      ? STATUS.EMPTY
      : lrc.status;
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
          // @ts-expect-error
          return <Lyric style={style} lrc={lrc.value} />;
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
              retry={retry}
              style={cardStyle}
            />
          </CardContainer>
        );
      })}
    </Style>
  );
};

export default Wrapper;
