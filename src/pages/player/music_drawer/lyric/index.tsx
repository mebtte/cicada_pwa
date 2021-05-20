import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

import { RequestStatus } from '@/constant';
import { Music, MusicType } from '@/constant/music';
import ErrorCard from '@/components/error_card';
import Empty from '@/components/empty';
import useLrc from '../../use_lrc';
import Skeleton from './skeleton';
import Lyric from './lyric';
import Instrument from './instrument';

const STATUS = {
  ...RequestStatus,
  EMPTY: 'empty',
  INSTRUMENT: 'instrument',
};
const Style = styled.div`
  position: relative;
`;
const AnimatedDiv = styled(animated.div)`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  padding-bottom: 20px;
`;
const cardStyle = {
  padding: '20px 0',
  marginBottom: 50,
};

const Wrapper = ({ music }: { music: Music }) => {
  const { status, reload, lrc } = useLrc(music);
  const actualStatus =
    // eslint-disable-next-line no-nested-ternary
    music.type === MusicType.NORMAL
      ? status === RequestStatus.SUCCESS && !lrc
        ? STATUS.EMPTY
        : status
      : STATUS.INSTRUMENT;
  // @ts-ignore
  const transitons = useTransition(actualStatus, (s) => s, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <Style>
      {transitons.map(({ item: s, key, props: style }) => {
        let content = null;
        if (s === STATUS.SUCCESS) {
          content = <Lyric lrc={lrc} />;
        } else if (s === STATUS.INSTRUMENT) {
          content = <Instrument />;
        } else if (s === STATUS.LOADING) {
          content = <Skeleton />;
        } else if (s === STATUS.EMPTY) {
          content = <Empty description="暂无歌词" style={cardStyle} />;
        } else {
          content = (
            <ErrorCard
              style={cardStyle}
              errorMessage="获取歌词失败"
              retry={reload}
            />
          );
        }
        return (
          <AnimatedDiv key={key} style={style}>
            {content}
          </AnimatedDiv>
        );
      })}
    </Style>
  );
};

export default Wrapper;
