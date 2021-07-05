import React, { useLayoutEffect, useRef, useState } from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';
import List from 'react-list';
import debounce from 'lodash/debounce';

import { MUSICBILL_SCROLL_TOP } from '@/constants/storage_key';
import scrollbarAsNeeded from '@/style/scrollbar_as_needed';
import { MusicWithIndex } from '../../../constants';
import Music from '../../../components/music';

const Style = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  > .list {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    overflow: auto;
    ${scrollbarAsNeeded}
  }

  > .mask {
    position: absolute;
    left: 0;
    width: 100%;
    height: 50px;
    transition: opacity 300ms;
  }
  > .top {
    top: 0;
    background: linear-gradient(
      to bottom,
      rgb(255 255 255 / 1),
      rgb(255 255 255 / 0)
    );
  }
  > .bottom {
    bottom: 0;
    background: linear-gradient(
      to top,
      rgb(255 255 255 / 1),
      rgb(255 255 255 / 0)
    );
  }
`;

const useScroll = (id: string) => {
  const ref = useRef<HTMLDivElement>();
  const recordScrollPosition = debounce(() => {
    const { scrollTop } = ref.current;
    sessionStorage.setItem(
      MUSICBILL_SCROLL_TOP.replace('{{musicbill_id}}', id),
      scrollTop.toString(),
    );
  }, 1000);

  const [topMaskVisible, setTopMaskVisible] = useState(false);
  const [bottomMaskVisible, setBottomMaskVisible] = useState(false);
  const orientate = () => {
    const { scrollTop, clientHeight, scrollHeight } = ref.current;
    setTopMaskVisible(scrollTop !== 0);
    setBottomMaskVisible(scrollTop + clientHeight < scrollHeight);
  };

  const onScroll = () => {
    orientate();
    recordScrollPosition();
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      const scrollTopString = sessionStorage.getItem(
        MUSICBILL_SCROLL_TOP.replace('{{musicbill_id}}', id),
      );
      if (scrollTopString) {
        ref.current.scrollTop = +scrollTopString || 0;
      }
      orientate();
    }, 0);
  }, [id]);

  return { ref, onScroll, topMaskVisible, bottomMaskVisible };
};

const MusicList = ({
  id,
  musicList,
  style,
}: {
  id: string;
  musicList: MusicWithIndex[];
  style: unknown;
}) => {
  const { ref, onScroll, topMaskVisible, bottomMaskVisible } = useScroll(id);

  const musicItemRenderer = (index: number, key: string) => (
    <Music key={key} musicWithIndex={musicList[index]} />
  );
  return (
    <Style style={style}>
      <div className="list" ref={ref} onScroll={onScroll}>
        <List
          type="uniform"
          length={musicList.length}
          itemRenderer={musicItemRenderer}
        />
      </div>

      <div
        className="mask top"
        style={{
          opacity: topMaskVisible ? 1 : 0,
        }}
      />
      <div
        className="mask bottom"
        style={{
          opacity: bottomMaskVisible ? 1 : 0,
        }}
      />
    </Style>
  );
};

export default MusicList;
