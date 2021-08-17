import React, { useRef, useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import styled from 'styled-components';

import loadImage from '@/utils/load_image';
import AsyncQueue from '@/utils/async_queue';
import Avatar from '@/components/avatar';
import { COVER_SIZE } from './constants';

const queue = new AsyncQueue({
  taskMinDuration: 0.5 * 1000,
  taskTimeout: 10 * 1000,
});
const Style = styled.div`
  font-size: 0;
  > .cover {
    cursor: pointer;
  }
`;

const Cover = ({ src, onClick }: { src: string; onClick: () => void }) => {
  const abortRef = useRef<() => void | null>(null);

  const [currentSrc, setCurrentSrc] = useState('');
  const onEnter = () => {
    if (currentSrc === src) {
      return;
    }
    const { promise, abort, finished } = queue.run(() => loadImage(src));
    promise.then(() => setCurrentSrc(src));
    abortRef.current = () => {
      if (finished()) {
        return;
      }
      return abort();
    };
  };

  useEffect(
    () => () => {
      if (abortRef.current) {
        abortRef.current();
      }
    },
    [],
  );

  return (
    <Waypoint onEnter={onEnter} horizontal>
      <Style>
        <Avatar
          className="cover"
          src={currentSrc}
          size={COVER_SIZE}
          onClick={onClick}
          animated
        />
      </Style>
    </Waypoint>
  );
};

export default Cover;
