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

import * as screens from './screens';

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const App = () => (
  <ReactQueryCacheProvider queryCache={queryCache}>
    <Router>
      <div>
        <Navigation />
        <hr />
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
        </Switch>
      </div>
    </Router>
  </ReactQueryCacheProvider>
);


export default App;
