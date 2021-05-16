import React from 'react';
import styled from 'styled-components';

import { cmsPage } from './style';

import ErrorCard from '../../component/error_card';
import CircularLoader from '../../component/circular_loader';

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${cmsPage};
`;

const PageLoader = ({ error, retry }: { error?: Error; retry: () => void }) => (
  <Style>
    {error ? (
      <ErrorCard errorMessage={error.message} retry={retry} />
    ) : (
      <CircularLoader />
    )}
  </Style>
);

export default PageLoader;
