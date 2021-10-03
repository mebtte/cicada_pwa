import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Icon, { Name as IconName } from '@/components/icon';

const Style = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 15px;

  text-decoration: none;
  color: var(--text-color-primary);
  transition: background 300ms, color 300ms;

  > .icon {
    color: inherit;
  }

  > .label {
    color: inherit;
    font-size: 14px;
  }

  &.active {
    background: var(--color-primary);
    color: #fff !important;
  }

  &:hover {
    color: var(--color-primary);
  }
`;

const MenuItem = ({
  icon,
  label,
  to,
  ...props
}: {
  icon: IconName;
  label: string;
  to: string;
  [key: string]: any;
}) => (
  <Style to={to} activeClassName="active" {...props}>
    <Icon className="icon" name={icon} size={18} />
    <div className="label">{label}</div>
  </Style>
);

export default MenuItem;
