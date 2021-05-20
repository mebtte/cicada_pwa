import React from 'react';
import styled from 'styled-components';

import ErrorCard from '@/components/error_card';
import CircularLoader from '@/components/circular_loader';
import { cmsPage } from './style';

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
