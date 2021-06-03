import React from 'react';
import styled from 'styled-components';

import useHistory from '@/utils/use_history';
import Icon, { Name } from '@/components/icon';

const Style = styled.div`
  cursor: pointer;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  border-radius: 4px;
  transition: 300ms;
  &:hover {
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
      0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  }
  > .label {
    font-size: 12px;
    color: #888;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  > .value {
    font-size: 48px;
    font-weight: bold;
    color: #333;
  }
  > .action {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Paper = ({
  to,
  icon,
  label,
  value,
  children,
}: React.PropsWithChildren<{
  to: string;
  icon: Name;
  label: string;
  value: string;
}>) => {
  const history = useHistory();
  const onClick = () => history.push({ pathname: to });
  return (
    <Style onClick={onClick}>
      <div className="label">
        <Icon name={icon} size={16} />
        <div className="text">{label}</div>
      </div>
      <div className="value">{value}</div>
      <div className="action">{children}</div>
    </Style>
  );
};

export default Paper;
