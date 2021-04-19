import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { LocalMusicbill } from '@/constant/musicbill';
import Avatar from '@/component/avatar';
import ellipsis from '@/style/ellipsis';
import { CONTAINETR_STYLE, NAME_STYLE, COVER_SIZE } from './constant';

const Style = styled(Link)`
  display: block;
  text-decoration: none;
  position: relative;
  > .content {
    ${CONTAINETR_STYLE}
    z-index: 2;
    position: relative;
    background: linear-gradient(
      to right,
      rgb(255 255 255 / 0.3),
      rgb(255 255 255 / 1)
    );
    backdrop-filter: blur(3px);
    > .name {
      ${ellipsis}
      ${NAME_STYLE}
      user-select: none;
      color: rgb(55 55 55);
    }
  }
  > .background {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
  &:hover {
    background: linear-gradient(to right, rgb(0 0 0 / 0.1), rgb(0 0 0 / 0));
  }
`;

const Musicbill = ({
  musicbill,
  to,
  active,
}: {
  musicbill: LocalMusicbill;
  to: string;
  active: boolean;
}) => {
  const { name, cover } = musicbill;
  return (
    <Style to={to}>
      {active && (
        <div
          className="background"
          style={{ backgroundImage: `url(${cover})` }}
        />
      )}
      <div className="content">
        <Avatar src={cover} size={COVER_SIZE} />
        <div className="name">{name}</div>
      </div>
    </Style>
  );
};

export default Musicbill;
