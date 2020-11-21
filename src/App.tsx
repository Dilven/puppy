import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'antd/dist/antd.css'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { Home } from './screens/Home';
import { Navigation } from './components/Navigation/Navigation';
import { paths } from './config/paths';
import { Layout } from 'antd';
import { ReactQueryDevtools } from 'react-query-devtools'

import * as screens from './screens';
import { SavedProvider } from './providers/SavedProvider';
import { NotificationProvider } from './providers/NotificationProvider';
import { SavedItems } from './components/SavedItems';
import styles from './App.module.css'

const { Header, Content, Footer } = Layout;
const THIRTY_MINUTES = 1000 * 60 * 30;

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: THIRTY_MINUTES,
    }
  }
})

const App = () => (
  <ReactQueryCacheProvider queryCache={queryCache}>
    <ReactQueryDevtools initialIsOpen />
    <NotificationProvider>
      <SavedProvider>
        <SavedItems />
        <Layout className={`site-layout ${styles.layout}`} >
          <Router>
            <Navigation />
            <Header className={`site-layout-sub-header-background ${styles.header}`} />
            <Content className={styles.content}>
              <div className={`site-layout-background ${styles.contentWrapper}`}>
                <Switch>
                  <Route exact path={paths.home}>
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
                    <screens.Series />
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
            <Footer className={styles.footer}>Training</Footer>
          </Router>
        </Layout>
      </SavedProvider>
    </NotificationProvider>
  </ReactQueryCacheProvider>
);


export default App;
