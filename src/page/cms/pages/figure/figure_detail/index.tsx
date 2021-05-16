import React from 'react';

import { RequestStatus } from '../../../../../constant';
import useFigure from './use_figure';
import Empty from '../../../../../component/empty';
import LoadingCard from '../../../../../component/loading_card';
import ErrorCard from '../../../../../component/error_card';
import Detail from './detail';

const cardStyle = {
  flex: 1,
  minWidth: 0,
};

const FigureDetail = () => {
  const { status, error, retry, figure } = useFigure();

  if (status === RequestStatus.SUCCESS) {
    return <Detail figure={figure!} />;
  }
  if (status === RequestStatus.LOADING) {
    return <LoadingCard message="正在获取角色信息..." style={cardStyle} />;
  }
  if (status === RequestStatus.NOT_START) {
    return <Empty description="请从左边选取一名角色" style={cardStyle} />;
  }
  return (
    <ErrorCard errorMessage={error!.message} retry={retry} style={cardStyle} />
  );
};

export default FigureDetail;
