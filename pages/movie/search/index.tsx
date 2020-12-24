import React from 'react';
import { paths } from '../../../config/paths';
import { MOVIE_TYPE } from '../../../constants/resource-types';
import { InternalApi } from '../../../services/internal-api';
import { Form } from '../../../components/Form/Form';

const SearchMovies = () => (
  <div>
    <h2>Search movies</h2>
    <Form query={InternalApi.searchMovies} queryKey={MOVIE_TYPE} redirectPath={paths.searchMoviesResults}/>
  </div>
);

export default SearchMovies;