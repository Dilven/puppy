import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { Home } from './screens/Home';
import { Search } from './screens/Search';
import { Results } from './screens/Results';
import { Navigation } from './Navigation';

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
          <Route exact path="/series/search">
            <Search />
          </Route>
          <Route path="/series/search/results">
            <Results />
          </Route>
          <Route exact path="/movies/search">
            <Search />
          </Route>
          <Route path="/movies/search/results">
            <Results />
          </Route>
        </Switch>
      </div>
    </Router>
  </ReactQueryCacheProvider>
);


export default App;
