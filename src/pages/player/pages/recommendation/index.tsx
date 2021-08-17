import React from 'react';
import styled from 'styled-components';

import scrollbarAsNeeded from '@/style/scrollbar_as_needed';
import Page from '../page';
import RecommendaryMusic from './recommendary_music';

const Style = styled(Page)`
  overflow: hidden auto;
  ${scrollbarAsNeeded}
`;

const Recommendation = () => {
  return (
    <Style>
      <RecommendaryMusic />
    </Style>
  );
};

export default Recommendation;
