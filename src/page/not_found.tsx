import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import scrollbar from '@/style/scrollbar';
import RouteContainer from './route_container';
import CommonHeader from '../component/common_header';
import CommonFooter from '../component/common_footer';

const Style = styled(RouteContainer)`
  ${scrollbar}
  overflow: auto;
`;

const NotFound = () => (
  <Style>
    <CommonHeader />
    todo(mebtte): 404
    <CommonFooter />
  </Style>
);

export default connect()(NotFound);
