import React, {
  ImgHTMLAttributes,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

import loadImage from '@/utils/load_image';
import { Shape } from './constants';
import JpegDefaultCover from './default_cover.jpeg';
import logger from '@/platform/logger';

const Style = styled.img`
  box-sizing: border-box;
  aspect-ratio: 1;
  object-fit: cover;
`;
const SHAPE_MAP: Record<Shape, { style: React.CSSProperties }> = {
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

type Props = {
  src?: string;
  shape?: Shape;
  size?: number | string;
  alt: string;
} & ImgHTMLAttributes<HTMLImageElement>;

const Cover = React.forwardRef<HTMLImageElement, Props>(
  ({ src, shape = Shape.SQUARE, size = 64, alt, ...props }: Props, ref) => {
    const innerRef = useRef<HTMLImageElement>(null);

    const [currentSrc, setCurrentSrc] = useState(JpegDefaultCover);

    useLayoutEffect(() => {
      if (src && currentSrc !== src) {
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

    return (
      <Style
        {...props}
        data-src={src}
        src={currentSrc}
        style={{
          width: size,
          ...SHAPE_MAP[shape].style,
          ...props.style,
        }}
        ref={innerRef}
        alt={alt}
      />
    );
  },
);

export default Cover;
