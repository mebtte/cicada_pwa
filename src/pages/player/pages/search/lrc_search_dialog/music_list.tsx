import React from 'react';
import styled, { css } from 'styled-components';
import { useTransition, animated } from 'react-spring';

import scrollbarAsNeeded from '@/style/scrollbar_as_needed';
import Pagination from '@/components/pagination';
import ErrorCard from '@/components/error_card';
import Empty from '@/components/empty';
import CircularLoader from '@/components/circular_loader';
import { RequestStatus } from '@/constants';
import { MusicList as MusicListType, PAGE_SIZE } from './constants';
import Music from './music';

const Style = styled.div`
  flex: 1;
  min-height: 0;
  position: relative;
`;
const containerStyle = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
const CenterBox = styled(animated.div)`
  ${containerStyle}
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MusicList = styled(animated.div)`
  ${containerStyle}
  display: flex;
  flex-direction: column;
  gap: 20px;
  > .list {
    flex: 1;
    min-height: 0;
    overflow: auto;
    ${scrollbarAsNeeded}

    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const Wrapper = ({
  page,
  musicList,
  retry,
  onPageChange,
}: {
  page: number;
  musicList: MusicListType;
  retry: () => void;
  onPageChange: (page: number) => void;
}) => {
  const transitions = useTransition(musicList, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <Style>
      {transitions(({ opacity }, ml) => {
        if (ml.status === RequestStatus.SUCCESS) {
          if (ml.list.length) {
            return (
              <MusicList style={{ opacity }}>
                <div className="list">
                  {ml.list.map((m) => (
                    <Music key={m.index} music={m} keyword={ml.keyword} />
                  ))}
                </div>
                <Pagination
                  currentPage={page}
                  pageCount={Math.ceil(ml.total / PAGE_SIZE)}
                  onPageChange={onPageChange}
                />
              </MusicList>
            );
          }
          return (
            <CenterBox style={{ opacity }}>
              <Empty description="未找到相关音乐" />
            </CenterBox>
          );
        }
        if (ml.status === RequestStatus.LOADING) {
          return (
            <CenterBox style={{ opacity }}>
              <CircularLoader />
            </CenterBox>
          );
        }
        return (
          <CenterBox style={{ opacity }}>
            <ErrorCard errorMessage={ml.error!.message} retry={retry} />
          </CenterBox>
        );
      })}
    </Style>
  );
};

export default Wrapper;
