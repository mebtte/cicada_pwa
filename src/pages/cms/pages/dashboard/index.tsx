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
import UserMusicbillPaper from './user_musicbill_paper';
import VerifyCodePaper from './verify_code_paper';
import MusicPlayLogPaper from './music_play_log_paper';
import Search from './search';

const Style = styled.div`
  ${cmsPage};
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
  ${scrollbar}
  > .loading {
    padding: 50px 0;
    text-align: center;
  }
  > .error-card {
    padding: 50px 0;
  }
  > .paper-list {
    padding: 0 20px;
    box-sizing: border-box;
    text-align: center;
  }
`;

const Dashboard = () => {
  const { data, retry } = useSummaryData();

  let content: ReactNode = null;
  if (data.status === RequestStatus.SUCCESS) {
    content = (
      <div className="paper-list">
        <UserPaper total={data.value.userTotal} />
        <FigurePaper total={data.value.figureTotal} />
        <MusicPaper total={data.value.musicTotal} />
        <MusicPlayLogPaper total={data.value.musicPlayLogTotal} />
        <UserMusicbillPaper total={data.value.userMusicbillTotal} />
        <VerifyCodePaper total={data.value.verifyCodeTotal} />
      </div>
    );
  } else if (data.status === RequestStatus.ERROR) {
    content = (
      <ErrorCard
        className="error-card"
        errorMessage={data.error.message}
        retry={retry}
      />
    );
  } else {
    content = (
      <div className="loading">
        <CircularLoader />
      </div>
    );
  }
  return (
    <Style>
      <Search />
      {content}
    </Style>
  );
};

export default Dashboard;
