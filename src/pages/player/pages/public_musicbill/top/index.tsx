import React from 'react';

import Input from '@/components/input';
import Avatar, { Shape } from '@/components/avatar';
import { Musicbill } from '../constants';
import Container from './container';
import { COVER_SIZE, AVATAR_SIZE } from './constants';

const Top = ({ musicbill }: { musicbill: Musicbill }) => {
  const { cover, name, user, description, musicList } = musicbill;
  return (
    <Container>
      <Avatar animated src={cover} size={COVER_SIZE} />
      <div className="info">
        <div className="name" title={name}>
          {name}
        </div>
        {description ? (
          <div className="description" title={description}>
            {description}
          </div>
        ) : null}
        <div className="user">
          <Avatar src={user.avatar} size={AVATAR_SIZE} shape={Shape.CIRCLE} />
          <div className="name" title={user.nickname}>
            {user.nickname}
          </div>
        </div>

        {musicList.length ? (
          <div className="search-box">
            <Input
              className="search"
              placeholder={`搜索歌单内的 ${musicList.length} 首音乐`}
            />
          </div>
        ) : null}
      </div>
    </Container>
  );
};

export default Top;
