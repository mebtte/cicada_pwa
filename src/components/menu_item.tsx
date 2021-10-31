import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import Icon, { Name } from './icon';

const Style = styled.div<{ active: boolean }>`
  padding: 10px 20px;

  display: flex;
  align-items: center;
  gap: 15px;

  cursor: pointer;
  transition: all 300ms;

  > .icon {
    color: inherit;
  }

  > .label {
    font-size: 14px;
    color: inherit;
  }

  &:hover {
    background-color: rgb(0 0 0 / 0.05);
  }

  &:active {
    background-color: rgb(0 0 0 / 0.1);
  }

  ${({ active }) => css`
    background-color: ${active
      ? 'var(--color-primary) !important'
      : 'transparent'};
    color: ${active ? '#fff' : 'var(--text-color-primary)'};
  `}
`;

const MenuItem = ({
  icon,
  label,
  active = false,
  ...props
}: {
  icon: Name;
  label: string;
  active?: boolean;
} & HTMLAttributes<HTMLDivElement>) => (
  <Style {...props} active={active}>
    <Icon className="icon" name={icon} size={16} />
    <div className="label">{label}</div>
  </Style>
);

export default MenuItem;
