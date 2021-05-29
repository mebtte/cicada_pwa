import React from 'react';
import styled from 'styled-components';
import { useSelector, shallowEqual } from 'react-redux';

import { User } from '@/constants/user';
import scrollbar from '@/style/scrollbar';
import PageContainer from '../page_container';
import Header from './header';
import { CONTENT_MAX_WIDTH } from './constants';
import Footer from './footer';

const Style = styled(PageContainer)`
  background-color: #f3f3f3;
  overflow: auto;
  ${scrollbar}
  >.content {
    max-width: ${CONTENT_MAX_WIDTH}px;
    margin: 0 auto;
  }
`;

const Home = () => {
  const user = useSelector(
    ({ user: u }: { user: User | null }) => u,
    shallowEqual,
  );
  return (
    <Style>
      <Header user={user} />
      <section className="content" />
      <Footer />
    </Style>
  );
};

export default Home;
