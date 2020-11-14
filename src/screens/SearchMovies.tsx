import React from 'react';
import { getMovies } from '../api';
import { Form } from '../components/Form';
import { MOVIES_QUERY_KEY } from '../constants/queriesKeys';

export const SearchMovies = () => (
  <div>
    <Form query={getMovies} queryKey={MOVIES_QUERY_KEY} />
  </div>
);