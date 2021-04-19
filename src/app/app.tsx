import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from 'react-loadable';

import { ROOT_PATH } from '@/constant/route';
import GlobalStyle from './global_style';
import Toast from './toast';
import Dialog from './dialog';
import RouteLoader from './route_loader';

const ROUTE_MAP_COMPONENT = {
  [ROOT_PATH.HOME]: loadable({
    loader: () => import(/* webpackChunkName: "page_home" */ '../page/home'),
    loading: RouteLoader,
    timeout: 30000,
    delay: 300,
  }),
  [ROOT_PATH.SIGNIN]: loadable({
    loader: () =>
      import(/* webpackChunkName: "page_signin" */ '../page/signin'),
    loading: RouteLoader,
    timeout: 30000,
    delay: 300,
  }),
  [ROOT_PATH.PLAYER]: loadable({
    loader: () =>
      import(/* webpackChunkName: "page_player" */ '../page/player'),
    loading: RouteLoader,
    timeout: 30000,
    delay: 300,
  }),
  [ROOT_PATH.DASHBOARD]: loadable({
    loader: () =>
      import(/* webpackChunkName: "page_dashboard" */ '../page/dashboard'),
    loading: RouteLoader,
    timeout: 30000,
    delay: 300,
  }),
  [ROOT_PATH.ABOUT]: loadable({
    loader: () => import(/* webpackChunkName: "page_about" */ '../page/about'),
    loading: RouteLoader,
    timeout: 30000,
    delay: 300,
  }),
  [ROOT_PATH.DESKTOP_CONFIGURE]: loadable({
    loader: () =>
      import(
        /* webpackChunkName: "page_electron_setting" */ '../page/desktop_configure'
      ),
    loading: RouteLoader,
    timeout: 30000,
    delay: 300,
  }),
};
const NotFound = loadable({
  loader: () =>
    import(/* webpackChunkName: "not_found_page" */ '../page/not_found'),
  loading: RouteLoader,
  timeout: 30000,
  delay: 300,
});

const routeList = Object.keys(ROUTE_MAP_COMPONENT).map((path) => (
  <Route
    key={path}
    path={path}
    component={ROUTE_MAP_COMPONENT[path]}
    exact={path === ROOT_PATH.HOME}
  />
));

const App = () => (
  <>
    <GlobalStyle />
    <Switch>
      {routeList}
      <Route path="*" component={NotFound} />
    </Switch>
    <Toast />
    <Dialog />
  </>
);

export default App;
