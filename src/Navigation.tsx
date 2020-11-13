import React from 'react';
import { Link } from "react-router-dom";

export const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/movies/search">Search movies</Link>
    </li>
    <li>
      <Link to="/series/search">Search series</Link>
    </li>
  </ul>
)