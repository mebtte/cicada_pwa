import React, { useRef, ReactNode, useEffect } from 'react';
import styled from 'styled-components';

import { RequestStatus } from '@/constant';
import scrollbar from '@/style/scrollbar';
import WidthResizeDetector from '@/components/width_resize_detector';
import Pagination from '@/components/pagination';
import ErrorCard from '@/components/error_card';
import Skeleton from './skeleton';
import MusicList from './music_list';
import { routeContainerStyle } from '../style';
import eventemitter, { Type as EventType } from './eventemitter';
import useLastestMusicList from './use_latest_music_list';

const Style = styled(WidthResizeDetector)`
  ${scrollbar}
  overflow: auto;
  ${routeContainerStyle}
  > .list {
    padding: 0 10px;
  }
`;
const errorCardStyle = {
  padding: '100px 0',
};
const paginationStyle = {
  margin: '20px 0',
};

const Home = () => {
  const rootRef = useRef<HTMLDivElement>();
  const {
    status,
    error,
    retry,
    page,
    pageCount,
    onPageChange,
    musicList,
  } = useLastestMusicList();

  useEffect(() => {
    const scrollToTopListener = () =>
      rootRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    eventemitter.on(EventType.SCROLL_TO_TOP, scrollToTopListener);
    return () =>
      void eventemitter.off(EventType.SCROLL_TO_TOP, scrollToTopListener);
  }, []);

  return (
    <Style ref={rootRef}>
      {(width: number) => {
        let content: ReactNode = null;
        if (status === RequestStatus.SUCCESS) {
          content = <MusicList containerWidth={width} musicList={musicList} />;
        } else if (status === RequestStatus.LOADING) {
          content = <Skeleton containerWidth={width} />;
        } else {
          content = (
            <ErrorCard
              errorMessage={error!.message}
              retry={retry}
              style={errorCardStyle}
            />
          );
        }
        return (
          <>
            {content}
            {status !== RequestStatus.ERROR && (
              <Pagination
                style={paginationStyle}
                currentPage={page}
                onPageChange={onPageChange}
                pageCount={pageCount}
              />
            )}
          </>
        );
      }}
    </Style>
  );
};

export default Home;
