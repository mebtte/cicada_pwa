import React from 'react';
import styled from 'styled-components';

import PngError from './error.png';
import Avatar from '../avatar';
import IconButton, { Name } from '../icon_button';

const PLACEHOLDER_SIZE = 150;
const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > .error-message {
    max-width: 400px;
    white-space: pre-wrap;
    margin: 15px 0;
    font-size: 12px;
    line-height: 1.5;
    text-align: center;
    color: rgb(150 150 150);
  }
`;

/**
 * 错误卡片
 * @author mebtte<hi@mebtte.com>
 */
const ErrorCard = ({
  errorMessage,
  retry,
  ...props
}: {
  /** 错误信息 */
  errorMessage: string;
  /** 重试方法 */
  retry: () => void;
  [key: string]: any;
}) => (
  <Style {...props}>
    <Avatar animated src={PngError} size={PLACEHOLDER_SIZE} />
    <div className="error-message">{errorMessage}</div>
    <IconButton name={Name.REFRESH_OUTLINE} onClick={retry} />
  </Style>
);

export default React.memo(ErrorCard);
