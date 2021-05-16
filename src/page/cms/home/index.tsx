import React from 'react';
import styled from 'styled-components';

import { route } from '../style';

const Style = styled.div`
  ${route};
`;

const Home = () => <Style>home</Style>;

export default Home;
