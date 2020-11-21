import React from "react";
import { Switch, Route } from "react-router-dom";
import { paths } from "./config/paths";
import * as screens from './screens';

export const Routes = () => (
  <Switch>
    <Route exact path={paths.home}>
      <screens.Home />
    </Route>
    <Route exact path={paths.signUp}>
      <screens.SignUp />
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
)