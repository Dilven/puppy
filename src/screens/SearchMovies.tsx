import React from 'react';
import { searchMovies } from '../api';
import { Form } from '../components/Form';
import { paths } from '../config/paths';
import { MOVIES_QUERY_KEY } from '../constants/queriesKeys';

export const SearchMovies = () => (
  <div>
    <Form query={searchMovies} queryKey={MOVIES_QUERY_KEY} redirectPath={paths.searchMoviesResults}/>
  </div>
);