import styled from 'styled-components';

import ellipsis from '@/style/ellipsis';
import { COVER_SIZE } from '../constants';

export default styled.div`
  width: ${COVER_SIZE}px;

  > .cover-box {
    position: relative;

    overflow: hidden;

    > .menu {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;

      box-sizing: border-box;
      padding: 5px;

      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 5px;

      transition: 300ms;
      opacity: 0;
      transform: translateY(100%);
      background: linear-gradient(
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.7)
      );
    }
  }

  > .name {
    margin: 5px 0 2px 0;

    height: 20px;
    line-height: 20px;
    font-size: 14px;

    cursor: pointer;
    color: var(--text-color-primary);
    ${ellipsis}

    &:hover {
      color: #000;
    }
  }

  > .singers {
    height: 16px;
    line-height: 16px;
    font-size: 12px;

    ${ellipsis}
  }

  &:hover {
    > .cover-box {
      > .menu {
        opacity: 1;
        transform: translateY(0%);
      }
    }
  }
`;
