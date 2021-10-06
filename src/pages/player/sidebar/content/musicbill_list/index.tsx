import React, { useContext } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

import Empty from '@/components/empty';
import IconButton, { Name as IconButtonName } from '@/components/icon_button';
import ErrorCard from '@/components/error_card';
import Context from '../../../context';
import eventemitter, { EventType } from '../../../eventemitter';
import MusicbillList from './musicbill_list';
import Loading from './loading';

const ACTION_SIZE = 18;

const Style = styled.div`
  > .label {
    padding: 0 20px;
    margin-bottom: 6px;

    display: flex;
    align-items: center;
    gap: 5px;

    > .text {
      flex: 1;
      min-width: 0;

      font-size: 12px;
      color: var(--text-color-secondary);
    }
  }

  > .content {
    position: relative;
  }
`;
const CardContainer = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px 0;
`;

const openMusicbillCreateDialog = () =>
  eventemitter.emit(EventType.OPEN_CREATE_MUSICBILL_DIALOG, {});
const reloadMusicbillList = () =>
  eventemitter.emit(EventType.RELOAD_MUSICBILL_LIST, {});

const Wrapper = () => {
  const { musicbillList } = useContext(Context);

  const transitions = useTransition(musicbillList.loading, {
    initial: {
      opacity: 1,
    },
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });
  return (
    <Style>
      <div className="label">
        <div className="text">我的歌单</div>
        <IconButton
          name={IconButtonName.PLUS_OUTLINE}
          size={ACTION_SIZE}
          disabled={musicbillList.loading}
          onClick={openMusicbillCreateDialog}
        />
        <IconButton
          name={IconButtonName.MORE_OUTLINE}
          size={ACTION_SIZE}
          loading={musicbillList.loading}
          onClick={reloadMusicbillList}
        />
      </div>
      <div className="content">
        {transitions((style, loading) => {
          if (loading) {
            return <Loading style={style} />;
          }
          if (musicbillList.error) {
            return (
              <CardContainer style={style}>
                <ErrorCard
                  errorMessage={musicbillList.error.message}
                  retry={reloadMusicbillList}
                />
              </CardContainer>
            );
          }
          if (!musicbillList.value.length) {
            return (
              <CardContainer style={style}>
                <Empty description="空的歌单列表" />
              </CardContainer>
            );
          }
          return (
            <MusicbillList musicbillList={musicbillList.value} style={style} />
          );
        })}
      </div>
    </Style>
  );
};

export default Wrapper;
