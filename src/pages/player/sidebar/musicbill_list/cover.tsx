/* eslint-disable max-classes-per-file */
import React, { useRef, useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import styled, { css } from 'styled-components';

import logger from '@/platform/logger';
import loadImage from '@/utils/load_image';
import AsyncQueue from '@/utils/async_queue';
import Avatar from '@/components/avatar';
import { COVER_SIZE } from './constants';

class AbortError extends Error {}
class TimeoutError extends Error {}
const queue = new AsyncQueue({
  taskMinDuration: 0.5 * 1000,
  taskTimeout: 10 * 1000,
  abortErrorGenerator: () => new AbortError('队列加载图片被主动阻断.'),
  timeoutErrorGenerator: (ms) => new TimeoutError(`队列加载图片超时 ${ms}ms.`),
});
const Style = styled.div<{ publiz: boolean }>`
  font-size: 0;
  > .cover {
    cursor: pointer;
  }
  ${({ publiz }) => css`
    > .cover {
      border: ${publiz ? '2px solid var(--color-primary)' : 'none'};
    }
  `}
`;

const Cover = ({ src, publiz }: { src: string; publiz: boolean }) => {
  const abortRef = useRef<() => void | null>(null);

  const [currentSrc, setCurrentSrc] = useState('');
  const onEnter = () => {
    if (currentSrc === src) {
      return;
    }
    const { promise, abort, finished } = queue.run(() => loadImage(src));
    promise
      .then(() => setCurrentSrc(src))
      .catch((error) => {
        if (error instanceof AbortError) {
          return;
        }
        return logger.error(error, {
          description: '加载图片失败',
          report: true,
        });
      });
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
    <Waypoint onEnter={onEnter}>
      <Style publiz={publiz}>
        <Avatar className="cover" src={currentSrc} size={COVER_SIZE} animated />
      </Style>
    </Waypoint>
  );
};

export default Cover;
