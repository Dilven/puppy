import React from 'react';
import { getSeries } from '../api';
import { Form } from '../components/Form';
import { SERIES_QUERY_KEY } from '../constants/queriesKeys';

export const SearchSeries = () => (
  <div>
    <h2>Search series</h2>
    <Form query={getSeries} queryKey={SERIES_QUERY_KEY} />
  </div>
);