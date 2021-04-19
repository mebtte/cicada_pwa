import React from 'react';
import styled, { css } from 'styled-components';

const Style = styled.div`
  display: inline-block;
  font-size: 12px;
  line-height: 12px;
  border-width: 1px;
  border-radius: 2px;
  border-style: solid;
  padding: 1px 3px;
  ${({ color }) => css`
    color: ${color};
    border-color: ${color};
  `}
`;

const Tag = ({
  tag,
  color = 'rgb(222, 222, 222)',
  ...props
}: {
  tag: string;
  color?: string;
  [key: string]: any;
}) => (
  <Style {...props} color={color}>
    {tag}
  </Style>
);

export default React.memo(Tag);
