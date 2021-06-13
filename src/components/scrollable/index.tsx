import React, {
  HTMLAttributes,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

import scrollbar from '@/style/styled_scrollbar';

const Style = styled.div`
  overflow: hidden;
  position: relative;
  > .content {
    overflow: auto;
    ${scrollbar}
  }
  > .mask {
    pointer-events: none;
    transition: 300ms;
  }
  > .left {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
  > .right {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }
  > .top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  > .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

type Props = React.PropsWithChildren<{
  r?: number;
  g?: number;
  b?: number;
  maskSize?: number;
  contentProps?: HTMLAttributes<HTMLDivElement>;
  [key: string]: any;
}>;

const Scollable = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      r = 255,
      g = 255,
      b = 255,
      maskSize = 50,
      contentProps = {},
      children,
      ...props
    }: Props,
    ref,
  ) => {
    const innerRef = useRef<HTMLDivElement>();

    const [leftVisible, setLeftVisible] = useState(false);
    const [rightVisible, setRightVisible] = useState(false);
    const [topVisible, setTopVisible] = useState(false);
    const [bottomVisible, setBottomVisible] = useState(false);
    const orientate = useCallback(() => {
      const {
        scrollTop,
        scrollLeft,
        clientHeight,
        clientWidth,
        scrollHeight,
        scrollWidth,
      } = innerRef.current;
      setLeftVisible(scrollLeft !== 0);
      setRightVisible(scrollLeft + clientWidth < scrollWidth);
      setTopVisible(scrollTop !== 0);
      setBottomVisible(scrollTop + clientHeight < scrollHeight);
    }, []);
    const onScroll = (event) => {
      orientate();
      // eslint-disable-next-line no-unused-expressions
      contentProps.onScroll && contentProps.onScroll(event);
    };

    useLayoutEffect(() => {
      orientate();
    }, [orientate]);

    return (
      <Style {...props} ref={ref}>
        <div
          {...contentProps}
          ref={innerRef}
          className={`content ${contentProps.className}`}
          onScroll={onScroll}
        >
          {children}
        </div>
        <div
          className="mask left"
          style={{
            width: maskSize,
            opacity: leftVisible ? 1 : 0,
            background: `linear-gradient(to right, rgb(${r} ${g} ${b} / 1), rgb(${r} ${g} ${b} / 0))`,
          }}
        />
        <div
          className="mask right"
          style={{
            width: maskSize,
            opacity: rightVisible ? 1 : 0,
            background: `linear-gradient(to left, rgb(${r} ${g} ${b} / 1), rgb(${r} ${g} ${b} / 0))`,
          }}
        />
        <div
          className="mask top"
          style={{
            height: maskSize,
            opacity: topVisible ? 1 : 0,
            background: `linear-gradient(to bottom, rgb(${r} ${g} ${b} / 1), rgb(${r} ${g} ${b} / 0))`,
          }}
        />
        <div
          className="mask bottom"
          style={{
            height: maskSize,
            opacity: bottomVisible ? 1 : 0,
            background: `linear-gradient(to top, rgb(${r} ${g} ${b} / 1), rgb(${r} ${g} ${b} / 0))`,
          }}
        />
      </Style>
    );
  },
);

export default Scollable;
