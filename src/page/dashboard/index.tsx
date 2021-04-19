import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from 'react-loadable';

import { DASHBOARD_PATH } from '@/constant/route';
import withSignin from '@/platform/with_signin';
import RouteContainer from '../route_container';
import RouteLoader from './route_loader';
import Header from './header';
import Sidebar from './sidebar';

const ROUTE = {
  HOME: loadable({
    loader: () =>
      import(/* webpackChunkName: "dashboard_home_page" */ './home'),
    loading: RouteLoader,
    timeout: 30000,
    delay: 300,
  }),
  FIGURE: loadable({
    loader: () =>
      import(/* webpackChunkName: "dashboard_figure_page" */ './figure'),
    loading: RouteLoader,
    timeout: 30000,
    delay: 300,
  }),
  MUSIC: loadable({
    loader: () =>
      import(/* webpackChunkName: "dashboard_music_page" */ './music'),
    loading: RouteLoader,
    timeout: 30000,
    delay: 300,
  }),
};

const Scrollable = styled(RouteContainer)`
  overflow: auto;
`;
const Style = styled(RouteContainer)`
  width: 100%;
  height: 100%;
  min-width: 1280px;
  display: flex;
  flex-direction: column;
  > .container {
    flex: 1;
    min-height: 0;
    display: flex;
  }
`;

const Dashboard = () => (
  <Scrollable>
    <Style>
      <Header />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path={DASHBOARD_PATH.HOME} component={ROUTE.HOME} exact />
          <Route path={DASHBOARD_PATH.FIGURE} component={ROUTE.FIGURE} />
          <Route path={DASHBOARD_PATH.MUSIC} component={ROUTE.MUSIC} />
          <Redirect to={DASHBOARD_PATH.HOME} />
        </Switch>
      </div>
    </Style>
  </Scrollable>
);

export default withSignin()(Dashboard);
