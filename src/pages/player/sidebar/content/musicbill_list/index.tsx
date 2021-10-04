import React, { useContext } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

import IconButton, { Name as IconButtonName } from '@/components/icon_button';
import ErrorCard from '@/components/error_card';
import LoadingCard from '@/components/loading_card';
import Context from '../../../context';
import eventemitter, { EventType } from '../../../eventemitter';
import MusicbillList from './musicbill_list';

const Style = styled.div`
  > .label {
    padding: 0 15px;
    margin-bottom: 5px;

    display: flex;
    align-items: center;

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

  > .error {
    padding-bottom: 30px;
  }

  > .loader {
    padding: 30px 0;
  }
`;

const reloadMusicbillList = () =>
  eventemitter.emit(EventType.RELOAD_MUSICBILL_LIST, {});

const Wrapper = () => {
  const { musicbillList } = useContext(Context);

  const transitions = useTransition(musicbillList, {
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
          name={IconButtonName.REFRESH_OUTLINE}
          size={16}
          loading={musicbillList.loading}
          onClick={reloadMusicbillList}
        />
      </div>
      <div className="content">
        {transitions((style, mbl) => {
          if (mbl.error) {
            return (
              <CardContainer style={style}>
                <ErrorCard
                  className="error"
                  errorMessage={mbl.error.message}
                  retry={reloadMusicbillList}
                />
              </CardContainer>
            );
          }
          if (mbl.loading) {
            return (
              <CardContainer style={style}>
                <LoadingCard className="loader" />
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
