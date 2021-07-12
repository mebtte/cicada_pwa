import React, { useContext } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useTransition } from 'react-spring';

import Scrollable, { ScrollbarType } from '@/components/scrollable';
import { PLAYER_PATH } from '@/constants/route';
import { RequestStatus } from '@/constants';
import ErrorCard from '@/components/error_card';
import Empty from '@/components/empty';
import Skeleton from './skeleton';
import Musicbill from './musicbill';
import eventemitter, { EventType } from '../../eventemitter';
import Context from '../../context';
import Action from './action';
import useKeyboard from './use_keyboard';
import { MusicbillListContainer, full } from './constants';

const Style = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  > .musicbill-list {
    flex: 1;
    min-height: 0;
    position: relative;
  }
`;
const StyledScrollable = styled(Scrollable)`
  ${full}
`;
const scrollableMaskProps = {
  size: 50,
  style: { zIndex: 3 },
};
const CenterBox = styled(MusicbillListContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const onReloadMusicbillList = () =>
  eventemitter.emit(EventType.RELOAD_MUSICBILL_LIST);

const MusicbillList = () => {
  const location = useLocation();
  const { getMusicbillListStatus, musicbillList } = useContext(Context);

  useKeyboard(musicbillList);

  const transitions = useTransition(getMusicbillListStatus, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const animatedContent = transitions((style, s) => {
    if (s === RequestStatus.SUCCESS) {
      if (musicbillList.length) {
        const { pathname } = location;
        return (
          <MusicbillListContainer style={style}>
            <StyledScrollable
              scrollbarType={ScrollbarType.NEVER}
              maskProps={scrollableMaskProps}
            >
              {musicbillList.map((mb) => {
                const { id } = mb;
                const to = PLAYER_PATH.MUSICBILL.replace(':id', id);
                return (
                  <Musicbill
                    key={id}
                    musicbill={mb}
                    to={to}
                    active={to === pathname}
                  />
                );
              })}
            </StyledScrollable>
          </MusicbillListContainer>
        );
      }
      return (
        <CenterBox style={style}>
          <Empty description="空的歌单列表" />
        </CenterBox>
      );
    }
    if (s === RequestStatus.LOADING) {
      return <Skeleton style={style} />;
    }
    return (
      <CenterBox style={style}>
        <ErrorCard
          errorMessage="获取歌单列表失败"
          retry={onReloadMusicbillList}
        />
      </CenterBox>
    );
  });
  return (
    <Style>
      <Action status={getMusicbillListStatus} musicbillList={musicbillList} />
      <div className="musicbill-list">{animatedContent}</div>
    </Style>
  );
};

export default React.memo(MusicbillList);
