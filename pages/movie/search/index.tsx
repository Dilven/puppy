import React from 'react';
import { paths } from '../../../config/paths';
import { MOVIES_QUERY_KEY } from '../../../constants/queries-keys';
import { InternalApi } from '../../../services/internal-api';
import { Form } from '../../../components/Form/Form';

const SearchMovies = () => (
  <div>
    <h2>Search movies</h2>
    <Form query={InternalApi.searchMovies} queryKey={MOVIES_QUERY_KEY} redirectPath={paths.searchMoviesResults}/>
  </div>
);

export default SearchMovies;