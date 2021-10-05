import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Avatar from '@/components/avatar';
import ellipsis from '@/style/ellipsis';

const Style = styled(NavLink)`
  position: relative;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 6px 15px;

  text-decoration: none;

  > .background {
    display: none;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-size: cover;
    background-position: center;
    opacity: 0.5;
  }

  > .cover {
    position: relative;
  }

  > .label {
    flex: 1;
    min-width: 0;

    font-size: 14px;
    color: var(--text-color-primary);
    ${ellipsis}
  }

  &.active {
    > .background {
      display: block;
    }

    > .label {
      opacity: 0;
    }
  }

  &:hover {
    > .label {
      color: var(--color-primary);
    }
  }
`;

const Musicbill = ({
  to,
  cover,
  label,
  ...props
}: {
  to: string;
  cover: string;
  label: string;
  [key: string]: any;
}) => {
  return (
    <Style to={to} activeClassName="active" {...props}>
      <div
        className="background"
        style={{ backgroundImage: `url(${cover})` }}
      />
      <Avatar className="cover" src={cover} size={28} />
      <div className="label">{label}</div>
    </Style>
  );
};

export default Musicbill;
