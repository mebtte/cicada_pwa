import styled from 'styled-components';

import ellipsis from '@/style/ellipsis';
import { COVER_SIZE } from '../constants';

export default styled.div`
  width: ${COVER_SIZE}px;

  > .name {
    margin: 5px 0;

    cursor: pointer;
    font-size: 14px;
    color: var(--text-color-primary);
    ${ellipsis}

    &:hover {
      color: #000;
    }
  }
`;
