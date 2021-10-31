import React, { HTMLAttributes, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useTransition, animated, SpringConfig } from 'react-spring';

const Mask = styled(animated.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  background-color: rgb(0 0 0 / 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Body = styled(animated.div)`
  width: 100%;
  max-width: 350px;
  max-height: 80%;

  box-sizing: border-box;
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  background-color: white;
`;

/**
 * 弹窗
 * @author mebtte<hi@mebtte.com>
 */
const Dialog = ({
  open,

  maskProps = {},
  bodyProps = {},

  springConfig,
  children,
}: React.PropsWithChildren<{
  /** 开启状态 */
  open: boolean;

  /** 遮罩属性 */
  maskProps?: HTMLAttributes<HTMLDivElement>;
  /** 内容属性 */
  bodyProps?: HTMLAttributes<HTMLDivElement>;

  /** react-spring 配置 */
  springConfig?: SpringConfig;
}>) => {
  const bodyRef = useRef<HTMLDivElement | null>(null);

  const transitions = useTransition(open, {
    from: {
      opacity: 0,
      transform: 'translateY(100%)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0%)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(100%)',
    },

    config: springConfig,
  });
  return ReactDOM.createPortal(
    transitions(({ opacity, transform }, o) =>
      o ? (
        <Mask
          {...maskProps}
          style={{
            opacity,
            ...maskProps.style,
          }}
        >
          <Body
            {...bodyProps}
            style={{ transform, ...bodyProps.style }}
            ref={bodyRef}
          >
            {children}
          </Body>
        </Mask>
      ) : null,
    ),
    document.body,
  );
};

export default React.memo(Dialog, (prev, next) => {
  if (!prev.open && !next.open) {
    return true;
  }
  return false;
});
