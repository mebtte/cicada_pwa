import React, { useRef, HTMLAttributes } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

const Mask = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
const Body = styled(animated.div)`
  border-radius: 4px 4px 0 0;
  width: 100%;
  max-width: 375px;

  background-color: #fff;

  box-sizing: border-box;
`;

/**
 * 垂直抽屉
 * @author mebtte<hi@mebtte.com>
 */
const VerticalDrawer = ({
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
  const transitions = useTransition(open, {
    from: {
      opacity: 0,
      transform: 'translateY(100%)',
    },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: {
      opacity: 0,
      transform: 'translateY(100%)',
    },
  });
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
    transitions(({ opacity, transform }, o) =>
      o ? (
        <Mask
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

export default React.memo(VerticalDrawer, (prev, next) => {
  if (!prev.open && !next.open) {
    return true;
  }
  return false;
});
