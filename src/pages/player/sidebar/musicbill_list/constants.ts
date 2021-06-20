import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

export const full = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
export const MusicbillListContainer = styled(animated.div)`
  ${full}
`;
export const COVER_SIZE = 28;
export const CONTAINETR_STYLE = css`
  padding: 8px 20px;
  display: flex;
  align-items: center;
`;
export const NAME_STYLE = css`
  font-size: 14px;
  flex: 1;
  margin-left: 10px;
`;
