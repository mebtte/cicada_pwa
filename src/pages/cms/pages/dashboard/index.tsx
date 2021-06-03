import React, { ReactNode } from 'react';
import styled from 'styled-components';

import scrollbar from '@/style/scrollbar';
import { RequestStatus } from '@/constants';
import ErrorCard from '@/components/error_card';
import CircularLoader from '@/components/circular_loader';
import { cmsPage } from '../../style';
import useSummaryData from './use_summary_data';
import UserPaper from './user_paper';
import FigurePaper from './figure_paper';
import MusicPaper from './music_paper';

const Style = styled.div`
  ${cmsPage};
  position: relative;
  overflow: auto;
  ${scrollbar}
  > .child {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  > .loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > .paper-list {
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
`;

const Dashboard = () => {
  const { data, retry } = useSummaryData();

  let content: ReactNode = null;
  if (data.status === RequestStatus.SUCCESS) {
    content = (
      <div className="child paper-list">
        <UserPaper total={data.value.userTotal} />
        <FigurePaper total={data.value.figureTotal} />
        <MusicPaper total={data.value.musicTotal} />
      </div>
    );
  } else if (data.status === RequestStatus.ERROR) {
    content = (
      <ErrorCard
        className="child"
        errorMessage={data.error.message}
        retry={retry}
      />
    );
  } else {
    content = (
      <div className="child loading">
        <CircularLoader />
      </div>
    );
  }
  return <Style>{content}</Style>;
};

export default Dashboard;
