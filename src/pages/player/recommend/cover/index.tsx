import React, { HTMLAttributes, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import { Waypoint } from 'react-waypoint';

import loadImage from '@/utils/load_image';
import logger from '@/platform/logger';
import PngDefaultCover from './default_cover.jpeg';
import coverQueue, { AbortError } from './cover_queue';

const TRANSITION = {
  initial: { opacity: 1 },
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
};

const Style = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`;
const Cover = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
`;

const Wrapper = ({
  src,
  ...props
}: HTMLAttributes<HTMLDivElement> & { src?: string }) => {
  const abortLoadCoverRef = useRef<() => void | null>();

  const [currentSrc, setCurrentSrc] = useState(PngDefaultCover);
  const onEnter = () => {
    if (src && currentSrc !== src) {
      const { promise, finished, abort } = coverQueue.run(() => loadImage(src));
      abortLoadCoverRef.current = () => {
        if (finished()) {
          return;
        }
        return abort();
      };
      promise
        .then(() => setCurrentSrc(src))
        .catch((e) => {
          if (e instanceof AbortError) {
            return;
          }
          logger.error(e, {
            description: '加载音乐封面失败',
            report: true,
          });
          setCurrentSrc(PngDefaultCover);
        });
    }
  };

  useEffect(
    () => () => {
      // eslint-disable-next-line no-unused-expressions
      abortLoadCoverRef.current && abortLoadCoverRef.current();
    },
    [],
  );

  // @ts-ignore
  const transitions = useTransition(currentSrc, null, TRANSITION);
  return (
    <Style {...props}>
      <Waypoint onEnter={onEnter} />
      {transitions.map(({ item: s, key, props: style }) => (
        <Cover
          key={key}
          style={{
            ...style,
            backgroundImage: `url(${s})`,
            cursor: s === PngDefaultCover ? 'auto' : 'pointer',
          }}
        />
      ))}
    </Style>
  );
};

export default Wrapper;
