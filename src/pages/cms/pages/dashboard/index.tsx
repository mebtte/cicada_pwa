import React from 'react';
import styled from 'styled-components';

import { cmsPage } from '../../style';

const Style = styled.div`
  ${cmsPage};
`;

const Home = () => <Style>dashboard</Style>;

export default Home;
