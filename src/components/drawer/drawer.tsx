import React, { HTMLAttributes, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import { useTransition, animated } from 'react-spring';

import { Direction } from './constants';

const DIRECTION_MAP: Record<
  Direction,
  {
    transition: unknown;
    bodyCSS: ReturnType<typeof css>;
  }
> = {
  [Direction.LEFT]: {
    transition: {
      from: {
        opacity: 0,
        transform: 'translate(-100%)',
      },
      enter: { opacity: 1, transform: 'translate(0%)' },
      leave: {
        opacity: 0,
        transform: 'translate(-100%)',
      },
    },
    bodyCSS: css`
      left: 0;
    `,
  },
  [Direction.RIGHT]: {
    transition: {
      from: {
        opacity: 0,
        transform: 'translate(100%)',
      },
      enter: { opacity: 1, transform: 'translate(0%)' },
      leave: {
        opacity: 0,
        transform: 'translate(100%)',
      },
    },
    bodyCSS: css`
      right: 0;
    `,
  },
};

const Mask = styled(animated.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-app-region: no-drag;
`;
const Body = styled(animated.div)<{ direction: Direction }>`
  position: absolute;
  top: 0;
  height: 100%;
  background-color: white;
  box-sizing: border-box;

  ${({ direction }) => DIRECTION_MAP[direction].bodyCSS}
`;

type Props = React.PropsWithChildren<{
  open: boolean;
  onClose: () => void;

  direction?: Direction;

  maskProps?: HTMLAttributes<HTMLDivElement>;
  bodyProps?: HTMLAttributes<HTMLDivElement>;
}>;

const Drawer = ({
  open,
  onClose,

  direction = Direction.RIGHT,

  maskProps = {},
  bodyProps = {},

  children,
}: Props) => {
  const bodyRef = useRef<HTMLDivElement>();
  const onRequestClose: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (maskProps.onClick) {
      maskProps.onClick(event);
    }

    if (onClose && !bodyRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  const transitions = useTransition(open, DIRECTION_MAP[direction].transition);
  return transitions(({ opacity, transform }, o) =>
    o ? (
      <Mask
        {...maskProps}
        style={{
          opacity,
          ...maskProps.style,
        }}
        onClick={onRequestClose}
      >
        <Body
          {...bodyProps}
          ref={bodyRef}
          direction={direction}
          style={{
            transform,
            ...bodyProps.style,
          }}
        >
          {children}
        </Body>
      </Mask>
    ) : null,
  );
};

const Portal = (props: Props) =>
  ReactDOM.createPortal(<Drawer {...props} />, document.body);

export default React.memo(Portal, (prevProps, props) => {
  if (prevProps.open || props.open) {
    return false;
  }
  return true;
});
