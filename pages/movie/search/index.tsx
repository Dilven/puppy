import React from 'react';
import { searchMovies } from '../../../helpers/queries';
import { Form } from '../../../components/Form/Form';
import { paths } from '../../../config/paths';
import { MOVIES_QUERY_KEY } from '../../../constants/queries-keys';

const SearchMovies = () => (
  <div>
    <h2>Search movies</h2>
    <Form query={searchMovies} queryKey={MOVIES_QUERY_KEY} redirectPath={paths.searchMoviesResults}/>
  </div>
);

export default SearchMovies;