import Form from 'antd/lib/form/Form';
import React from 'react';
import { paths } from '../../../client/config/paths';
import { MOVIES_QUERY_KEY } from '../../../client/constants/queries-keys';
import { searchMovies } from '../../../client/helpers/api';

const SearchMovies = () => (
  <div>
    <h2>Search movies</h2>
    <Form query={searchMovies} queryKey={MOVIES_QUERY_KEY} redirectPath={paths.searchMoviesResults}/>
  </div>
);

export default SearchMovies;