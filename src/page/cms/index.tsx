import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from 'react-loadable';

import { CMS_PATH } from '@/constant/route';
import withSignin from '@/platform/with_signin';
import PageContainer from '../page_container';
import PageLoader from './page_loader';
import Header from './header';
import Sidebar from './sidebar';

const ROUTE = {
  HOME: loadable({
    loader: () =>
      import(/* webpackChunkName: "dashboard_home_page" */ './pages/home'),
    loading: PageLoader,
    timeout: 30000,
    delay: 300,
  }),
  FIGURE: loadable({
    loader: () =>
      import(/* webpackChunkName: "dashboard_figure_page" */ './pages/figure'),
    loading: PageLoader,
    timeout: 30000,
    delay: 300,
  }),
  MUSIC: loadable({
    loader: () =>
      import(/* webpackChunkName: "dashboard_music_page" */ './pages/music'),
    loading: PageLoader,
    timeout: 30000,
    delay: 300,
  }),
};

const Scrollable = styled(PageContainer)`
  overflow: auto;
`;
const Style = styled.div`
  width: 100%;
  height: 100%;
  min-width: 1280px;
  display: flex;
  > .container {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }
`;

const Dashboard = () => (
  <Scrollable>
    <Style>
      <Sidebar />
      <div className="container">
        <Header />
        <Switch>
          <Route path={CMS_PATH.HOME} component={ROUTE.HOME} exact />
          <Route path={CMS_PATH.FIGURE} component={ROUTE.FIGURE} />
          <Route path={CMS_PATH.MUSIC} component={ROUTE.MUSIC} />
          <Redirect to={CMS_PATH.HOME} />
        </Switch>
      </div>
    </Style>
  </Scrollable>
);

export default withSignin()(Dashboard);
