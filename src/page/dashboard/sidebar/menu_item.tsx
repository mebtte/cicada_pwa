import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Icon, { Name } from '@/component/icon';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Style = styled(({ active, ...props }) => <Link {...props} />)<{
  active: boolean;
}>`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  transition: all 300ms;
  > .icon {
    color: inherit;
  }
  > .label {
    font-size: 14px;
    margin-left: 10px;
    color: inherit;
  }
`;

const MenuItem = ({
  iconName,
  label,
  to,
  active,
}: {
  iconName: Name;
  label: string;
  to: string;
  active: boolean;
}) => {
  return (
    <Style to={to} active={active}>
      <Icon className="icon" name={iconName} size={16} />
      <div className="label">{label}</div>
    </Style>
  );
};

export default MenuItem;
