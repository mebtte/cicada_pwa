import React, {
  HTMLAttributes,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import styled, { css } from 'styled-components';

import noScrollbarStyle from '@/style/no_scrollbar';
import scrollbar from '@/style/styled_scrollbar';

const Style = styled.div<{ noScrollbar: boolean }>`
  overflow: hidden;
  position: relative;
  > .content {
    width: 100%;
    height: 100%;
    overflow: auto;
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
  ${({ noScrollbar }) => css`
    > .content {
      ${noScrollbar ? noScrollbarStyle : scrollbar}
    }
  `}
`;

type Props = React.PropsWithChildren<{
  r?: number;
  g?: number;
  b?: number;
  noScrollbar?: boolean;
  maskProps?: {
    style?: React.CSSProperties;
    size?: number;
  };
  contentProps?: HTMLAttributes<HTMLDivElement>;
  [key: string]: any;
}>;

const Scollable = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      r = 255,
      g = 255,
      b = 255,
      noScrollbar,
      maskProps = {},
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

    const { size = 50, style } = maskProps;
    return (
      <Style {...props} noScrollbar={noScrollbar} ref={ref}>
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
            ...style,
            width: size,
            opacity: leftVisible ? 1 : 0,
            background: `linear-gradient(to right, rgb(${r} ${g} ${b} / 1), rgb(${r} ${g} ${b} / 0))`,
          }}
        />
        <div
          className="mask right"
          style={{
            ...style,
            width: size,
            opacity: rightVisible ? 1 : 0,
            background: `linear-gradient(to left, rgb(${r} ${g} ${b} / 1), rgb(${r} ${g} ${b} / 0))`,
          }}
        />
        <div
          className="mask top"
          style={{
            ...style,
            height: size,
            opacity: topVisible ? 1 : 0,
            background: `linear-gradient(to bottom, rgb(${r} ${g} ${b} / 1), rgb(${r} ${g} ${b} / 0))`,
          }}
        />
        <div
          className="mask bottom"
          style={{
            ...style,
            height: size,
            opacity: bottomVisible ? 1 : 0,
            background: `linear-gradient(to top, rgb(${r} ${g} ${b} / 1), rgb(${r} ${g} ${b} / 0))`,
          }}
        />
      </Style>
    );
  },
);

export default Scollable;
