import React, { useLayoutEffect, useRef, useState } from 'react';
import { animated } from 'react-spring';
import styled, { css } from 'styled-components';
import List from 'react-list';

import { MUSICBILL_SCROLL_TOP } from '@/constants/storage_key';
import scrollbarAsNeeded from '@/style/scrollbar_as_needed';
import { MusicWithIndex } from '../../../constants';
import Music from '../../../components/music';

const Style = styled(animated.div)<{ topBoxShadow: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  overflow: auto;
  ${scrollbarAsNeeded}

  ${({ topBoxShadow }) => css`
    box-shadow: ${topBoxShadow
      ? 'inset 0px 10px 10px -10px rgb(0 0 0 / 10%)'
      : 'none'};
  `}
`;

const MusicList = ({
  id,
  musicList,
  style,
}: {
  id: string;
  musicList: MusicWithIndex[];
  style: unknown;
}) => {
  const ref = useRef<HTMLDivElement>();
  const [topBoxShadow, setTopBoxShadow] = useState(0);
  const timer = useRef<number>();
  const onScroll = () => {
    const { scrollTop } = ref.current;
    setTopBoxShadow(scrollTop === 0 ? 0 : 1);

    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(
      () =>
        window.sessionStorage.setItem(
          MUSICBILL_SCROLL_TOP.replace('{{musicbill_id}}', id),
          scrollTop.toString(),
        ),
      1000,
    );
  };
  useLayoutEffect(() => {
    window.setTimeout(() => {
      const scrollTopString = sessionStorage.getItem(
        MUSICBILL_SCROLL_TOP.replace('{{musicbill_id}}', id),
      );
      if (scrollTopString) {
        ref.current.scrollTop = +scrollTopString || 0;
      }
    }, 0);
  }, [id]);

  const musicItemRenderer = (index: number, key: string) => (
    <Music key={key} musicWithIndex={musicList[index]} />
  );
  return (
    <Style
      topBoxShadow={topBoxShadow}
      style={style}
      onScroll={onScroll}
      ref={ref}
    >
      <List
        type="uniform"
        length={musicList.length}
        itemRenderer={musicItemRenderer}
      />
    </Style>
  );
};

export default MusicList;
