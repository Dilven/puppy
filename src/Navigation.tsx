import React from 'react';
import { Link } from "react-router-dom";
import { paths } from './config/paths';

export const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to={paths.searchMovies}>Search movies</Link>
    </li>
    <li>
      <Link to={paths.searchSeries}>Search series</Link>
    </li>
    <li>
      <Link to={paths.searchEpisodes}>Search episodes</Link>
    </li>
  </ul>
)