import React from 'react';
import styled from 'styled-components';

import Avatar from '@/components/avatar';
import ellipsis from '@/style/ellipsis';
import MusicbillContainer from './musicbill_container';
import { COVER_SIZE } from './constants';

const Style = styled(MusicbillContainer)`
  position: relative;

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

  &.publiz {
    > .cover {
      border: 2px solid var(--color-primary);
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
  publiz = false,
  ...props
}: {
  to: string;
  cover: string;
  label: string;
  publiz?: boolean;
  [key: string]: any;
}) => (
  <Style
    to={to}
    activeClassName="active"
    className={publiz ? 'publiz' : ''}
    {...props}
  >
    <div className="background" style={{ backgroundImage: `url(${cover})` }} />
    <Avatar className="cover" src={cover} size={COVER_SIZE} />
    <div className="label">{label}</div>
  </Style>
);

export default Musicbill;
