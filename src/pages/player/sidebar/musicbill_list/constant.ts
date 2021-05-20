import { css } from 'styled-components';

import { RequestStatus } from '@/constants';

export const STATUS = {
  ...RequestStatus,
  EMPTY: 'empty',
};

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
