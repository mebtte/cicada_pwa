import React, { useRef, HTMLAttributes } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

import { ZIndex } from '@/constant/style';

const CONTENT_WIDTH = 300;
const TRANSITION = {
  from: {
    opacity: 0,
    transform: 'translate(-50%, 120%)',
  },
  enter: { opacity: 1, transform: 'translate(-50%, 0%)' },
  leave: {
    opacity: 0,
    transform: 'translate(-50%, 120%)',
  },
};
const Mask = styled(animated.div)`
  z-index: ${ZIndex.POPUP};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Body = styled(animated.div)`
  border-radius: 4px 4px 0 0;
  width: ${CONTENT_WIDTH}px;
  position: absolute;
  bottom: 0;
  left: 50%;
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
    0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  max-height: 60%;
  background-color: #fff;
`;

/**
 * 弹出面板
 * @author mebtte<hi@mebtte.com>
 */
const Popup = ({
  open,
  onClose,
  maskProps = {},
  bodyProps = {},
  children,
}: React.PropsWithChildren<{
  /** 开启状态 */
  open: boolean;
  /** 关闭回调 */
  onClose: () => void;

  /** 遮罩属性 */
  maskProps?: HTMLAttributes<HTMLDivElement>;
  /** 内容属性 */
  bodyProps?: HTMLAttributes<HTMLDivElement>;
}>) => {
  // @ts-ignore
  const transitions = useTransition(open, null, TRANSITION);
  const bodyRef = useRef<HTMLDivElement>(null);
  const onRequestClose = (event) => {
    // eslint-disable-next-line no-unused-expressions
    maskProps.onClick && maskProps.onClick(event);
    if (bodyRef.current && bodyRef.current.contains(event.target)) {
      return;
    }
    return onClose();
  };

  return ReactDOM.createPortal(
    transitions.map(({ item, key, props: { opacity, transform } }) =>
      item ? (
        <Mask
          key={key}
          {...maskProps}
          style={{ ...maskProps.style, opacity }}
          onClick={onRequestClose}
        >
          <Body
            {...bodyProps}
            ref={bodyRef}
            style={{
              ...bodyProps.style,
              transform,
            }}
          >
            {children}
          </Body>
        </Mask>
      ) : null,
    ),
    document.body,
  );
};

export default React.memo(Popup, (prev, next) => {
  if (!prev.open && !next.open) {
    return true;
  }
  return false;
});
