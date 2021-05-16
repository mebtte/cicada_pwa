import React from 'react';
import styled from 'styled-components';

import { RequestStatus } from '../../../../constant';
import useFigureList from './use_figure_list';

import FigureItem from './figure_item';
import ErrorCard from '../../../../component/error_card';
import LoadingCard from '../../../../component/loading_card';
import Empty from '../../../../component/empty';

const cardStyle = {
  flex: 1,
  minHeight: 0,
};
const Style = styled.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
`;

const FigureList = () => {
  const { keyword, status, error, retry, figureList } = useFigureList();

  if (status === RequestStatus.SUCCESS) {
    if (figureList.length) {
      return (
        <Style>
          {figureList.map((figure) => (
            <FigureItem key={figure.id} figure={figure} keyword={keyword} />
          ))}
        </Style>
      );
    }
    return (
      <Empty description={`未找到"${keyword}"相关角色`} style={cardStyle} />
    );
  }
  if (status === RequestStatus.LOADING) {
    return <LoadingCard message="正在搜索角色..." style={cardStyle} />;
  }
  if (status === RequestStatus.NOT_START) {
    return <Empty description="请通过上方输入框搜索角色" style={cardStyle} />;
  }
  return (
    <ErrorCard
      errorMessage={(error as Error).message}
      retry={retry}
      style={cardStyle}
    />
  );
};

export default FigureList;
