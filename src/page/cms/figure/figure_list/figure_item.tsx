import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Figure } from '@/constant/figure';
import { CMS_PATH } from '@/constant/route';
import Avatar from '@/component/avatar';

const Style = styled(Link)`
  display: block;
  text-decoration: none;
  margin: 0 10px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 300ms;
  border-radius: 4px;
  > .info {
    margin-left: 10px;
    flex: 1;
    min-width: 0;
    > .name {
      font-size: 14px;
      line-height: 1.5;
    }
    > .alias {
      font-size: 12px;
      line-height: 1.5;
    }
  }
`;

const FigureItem = ({
  figure,
  keyword,
}: {
  figure: Figure;
  keyword: string;
}) => {
  const { id, avatar, name, alias } = figure;
  return (
    <Style
      to={`${CMS_PATH.FIGURE}?keyword=${encodeURIComponent(
        keyword,
      )}&figure=${id}`}
    >
      <Avatar src={avatar} />
      <div className="info">
        <div className="name">{name}</div>
        {alias ? <div className="alias">{alias}</div> : null}
      </div>
    </Style>
  );
};

export default FigureItem;
