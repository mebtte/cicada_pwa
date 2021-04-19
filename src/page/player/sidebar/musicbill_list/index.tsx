import React, { useContext } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import { PLAYER_PATH } from '@/constant/route';
import { RequestStatus } from '@/constant';
import scrollbar from '@/style/no_scrollbar';
import ErrorCard from '@/component/error_card';
import Empty from '@/component/empty';
import Skeleton from './skeleton';
import Musicbill from './musicbill';
import eventemitter, { Type as EventType } from '../../eventemitter';
import Context from '../../context';
import Action from './action';
import { STATUS } from './constant';
import useKeyboard from './use_keyboard';

const Style = styled.div`
  flex: 1;
  min-height: 0;
  margin: 30px 0 0 0;
  display: flex;
  flex-direction: column;
  > .musicbill-list {
    flex: 1;
    min-height: 0;
    position: relative;
  }
`;
const cardStyle = {
  padding: '20px 0',
};
const AnimatedDiv = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: auto;
  ${scrollbar}
`;
const onReloadMusicbillList = () =>
  eventemitter.emit(EventType.RELOAD_MUSICBILL_LIST);

const MusicbillList = () => {
  const location = useLocation();
  const { getMusicbillListStatus, musicbillList } = useContext(Context);

  useKeyboard(musicbillList);

  const status: valueOf<typeof STATUS> =
    getMusicbillListStatus === RequestStatus.SUCCESS && !musicbillList.length
      ? STATUS.EMPTY
      : getMusicbillListStatus;
  const transitions = useTransition(status, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const animatedContent = transitions.map(({ item: s, key, props: style }) => {
    let content: React.ReactNode;
    if (s === STATUS.SUCCESS) {
      const { pathname } = location;
      content = musicbillList.map((mb) => {
        const { id } = mb;
        const to = PLAYER_PATH.MUSICBILL.replace(':id', id);
        return (
          <Musicbill key={id} musicbill={mb} to={to} active={to === pathname} />
        );
      });
    } else if (s === STATUS.EMPTY) {
      content = <Empty description="空的歌单列表" style={cardStyle} />;
    } else if (s === STATUS.LOADING) {
      content = <Skeleton />;
    } else {
      content = (
        <ErrorCard
          errorMessage="获取歌单列表失败"
          retry={onReloadMusicbillList}
          style={cardStyle}
        />
      );
    }
    return (
      <AnimatedDiv key={key} style={style}>
        {content}
      </AnimatedDiv>
    );
  });
  return (
    <Style>
      <Action status={status} musicbillCount={musicbillList.length} />
      <div className="musicbill-list">{animatedContent}</div>
    </Style>
  );
};

export default React.memo(MusicbillList);
