import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Avatar from '@/components/avatar';
import ellipsis from '@/style/ellipsis';
import { CONTAINETR_STYLE, NAME_STYLE, COVER_SIZE } from './constants';
import { Musicbill as MusicbillType } from '../../constants';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Style = styled(({ active, ...props }: any) => <Link {...props} />)<{
  active: boolean;
}>`
  display: block;
  text-decoration: none;
  position: relative;
  > .content {
    ${CONTAINETR_STYLE}
    position: relative;
    background: linear-gradient(
      to right,
      rgb(255 255 255 / 0.3),
      rgb(255 255 255 / 1)
    );
    > .name {
      ${ellipsis}
      ${NAME_STYLE}
      user-select: none;
    }
  }
  > .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  &:hover {
    > .content {
      > .name {
        color: var(--color-primary);
      }
    }
  }

  ${({ active }) => css`
    > .content {
      > .name {
        color: ${active ? 'var(--color-primary)' : 'var(--text-color-primary)'};
        text-shadow: ${active ? '1px 1px 1px rgb(255 255 255 / 0.5)' : 'none'};
      }
    }
  `}
`;
const Cover = styled(Avatar)<{ publiz: boolean }>`
  border-width: 3px;
  border-style: solid;
  ${({ publiz }) => css`
    border-color: ${publiz ? 'var(--color-primary)' : 'transparent'};
  `}
`;

const Musicbill = ({
  musicbill,
  to,
  active,
}: {
  musicbill: MusicbillType;
  to: string;
  active: boolean;
}) => {
  const { name, cover, public: publiz } = musicbill;
  return (
    <Style to={to} active={active}>
      {active && (
        <div
          className="background"
          style={{ backgroundImage: `url(${cover})` }}
        />
      )}
      <div className="content">
        <Cover src={cover} size={COVER_SIZE} publiz={publiz} />
        <div className="name">{name}</div>
      </div>
    </Style>
  );
};

export default Musicbill;
