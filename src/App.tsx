import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'antd/dist/antd.css'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { Home } from './screens/Home';
import { Navigation } from './Navigation';
import { paths } from './config/paths';
import { Layout } from 'antd';
import { ReactQueryDevtools } from 'react-query-devtools'

import * as screens from './screens';
import { NotificationProvider } from './providers/NotificationProvider';
import { Notifications } from './components/Notifications';
const { Header, Content, Footer } = Layout;

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000
    }
  }
})

const App = () => (
  
  <ReactQueryCacheProvider queryCache={queryCache}>
    <ReactQueryDevtools initialIsOpen />
    <NotificationProvider>
      <Notifications />
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Router>
          <Navigation />
          <Header className="site-layout-sub-header-background" style={{ padding: 0, height: 53 }} />
          <Content style={{ margin: "24px 16px 0", overflow: "initial", height: "calc(100vh - 53px)" }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: "center" }}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path={paths.searchEpisodes}>
                <screens.SearchEpisodes />
              </Route>
              <Route path={paths.searchEpisodesResults}>
                <screens.ResultsEpisodes />
              </Route>
              <Route exact path={paths.searchMovies}>
                <screens.SearchMovies />
              </Route>
              <Route path={paths.searchMoviesResults}>
                <screens.ResultsMovies />
              </Route>
              <Route exact path={paths.searchSeries}>
                <screens.SearchSeries />
              </Route>
              <Route path={paths.searchSeriesResults}>
                <screens.ResultsSeries />
              </Route>
              <Route path={`${paths.series}/:id`}>
                <screens.Serie />
              </Route>
              <Route path={`${paths.movie}/:id`}>
                <screens.Movie />
              </Route>
              <Route path={`${paths.episode}/:id`}>
                <screens.Episode />
              </Route>
            </Switch>
          </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Router>
    </Layout>
    </NotificationProvider>
  </ReactQueryCacheProvider>
);


export default App;
