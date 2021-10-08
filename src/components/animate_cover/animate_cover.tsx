import React, {
  HTMLAttributes,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

import loadImage from '@/utils/load_image';
import { Shape } from './constants';
import JpegDefaultCover from './default_cover.jpeg';
import logger from '@/platform/logger';

const SHAPE_MAP: Record<
  Shape,
  {
    style: React.CSSProperties;
  }
> = {
  [Shape.CIRCLE]: {
    style: {
      borderRadius: '50%',
    },
  },
  [Shape.SQUARE]: {
    style: {
      borderRadius: 4,
    },
  },
};

const Style = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

type Props = {
  src: string;
  alt: string;
  size?: number | string;
  shape?: Shape;
} & HTMLAttributes<HTMLDivElement>;

const AnimateCover = React.forwardRef<HTMLDivElement, Props>(
  ({ src, alt, size = 64, shape = Shape.SQUARE, ...props }: Props, ref) => {
    const innerRef = useRef<HTMLDivElement>(null);
    const [currentSrc, setCurrentSrc] = useState(JpegDefaultCover);

    useLayoutEffect(() => {
      if (currentSrc !== src) {
        let canceled = false;
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            loadImage(src)
              .then(() => {
                if (!canceled) {
                  setCurrentSrc(src);
                }
              })
              .catch((error) =>
                logger.error(error, {
                  description: '加载图片失败',
                  report: true,
                }),
              );
          }
        });
        observer.observe(innerRef.current!);
        return () => {
          canceled = true;
          return observer.disconnect();
        };
      }
    }, [currentSrc, src]);

    useImperativeHandle(ref, () => innerRef.current!);

    const transitions = useTransition(currentSrc, {
      from: {
        transform: 'translateX(-100%)',
        opacity: 0,
      },
      enter: {
        transform: 'translateX(0%)',
        opacity: 1,
      },
      leave: {
        transform: 'translateX(100%)',
        opacity: 0,
      },
    });
    const { style } = SHAPE_MAP[shape];
    return (
      <Style
        {...props}
        style={{
          width: size,
          ...style,
          ...props.style,
        }}
        ref={innerRef}
        data-src={src}
      >
        {transitions((tStyle, s) => (
          <animated.img src={s} alt={alt} style={tStyle} />
        ))}
      </Style>
    );
  },
);

export default AnimateCover;
