import { Lrc } from '@mebtte/react-lrc';
import styled, { css } from 'styled-components';

import scrollbar from '@/style/scrollbar';

export const StyledLrc = styled(Lrc)`
  ${scrollbar};
  box-sizing: border-box;
  margin: 20px 0;
  padding-right: 15px;
  position: absolute;
  width: 100%;
  height: calc(100% - 40px);
  top: 0;
  left: 0;
`;

export const Line = styled.div<{ active?: boolean }>`
  font-size: 14px;
  padding: 5px 0;
  line-height: 1.5;
  transition: all 300ms;
  ${({ active }) => css`
    color: ${active ? 'rgb(49 194 124)' : 'rgb(155 155 155)'};
  `}
`;

export const container = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const Empty = styled.div`
  font-size: 12px;
`;
