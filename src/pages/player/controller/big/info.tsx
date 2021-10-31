import React, { useContext } from 'react';
import styled from 'styled-components';

import ellipsis from '@/style/ellipsis';
import Tag, { Type as TagType } from '@/components/tag';
import { Music, PlayMode } from '../../constants';
import Singer from '../../components/singer';
import eventemitter, { EventType } from '../../eventemitter';
import Context from '../../context';

const Style = styled.div`
  flex: 1;
  min-width: 0;

  display: flex;
  align-items: center;
  gap: 5px;

  > .left {
    min-width: 0;
    ${ellipsis}

    color: var(--text-color-secondary);

    > .name {
      font-size: 14px;
      color: var(--text-color-primary);

      &.active {
        cursor: pointer;

        &:hover {
          color: var(--color-primary);
        }
      }
    }

    > .singer-list {
      margin-left: 5px;

      font-size: 12px;
    }
  }
`;

const Info = ({ music }: { music: Music | null }) => {
  const { playMode } = useContext(Context);

  const onViewMusic = () => {
    if (!music) {
      return;
    }
    return eventemitter.emit(EventType.OPEN_MUSIC_DRAWER, { id: music.id });
  };

  let tagType: TagType | null = null;
  if (music) {
    // eslint-disable-next-line default-case
    switch (playMode) {
      case PlayMode.HQ: {
        if (music.hq) {
          tagType = TagType.HQ;
        }
        break;
      }
      case PlayMode.AC: {
        if (music.ac) {
          tagType = TagType.AC;
        }
        break;
      }
    }
    tagType = tagType || TagType.SQ;
  }

  return (
    <Style>
      <div className="left">
        {music ? (
          <>
            <span className="name active" onClick={onViewMusic}>
              {music.name}
            </span>
            <span className="singer-list">
              {music.singers.length ? (
                music.singers.map((s) => <Singer key={s.id} singer={s} />)
              ) : (
                <Singer />
              )}
            </span>
          </>
        ) : (
          <span className="name">知了</span>
        )}
      </div>
      {tagType ? <Tag className="tag" type={tagType} /> : null}
    </Style>
  );
};

export default Info;
