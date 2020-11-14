import React from 'react';
import { getEpisodes } from '../api';
import { Form } from '../components/Form';
import { EPISODES_QUERY_KEY } from '../constants/queriesKeys';

export const SearchEpisodes = () => (
  <div>
    <h2>Search episodes</h2>
    <Form query={getEpisodes} queryKey={EPISODES_QUERY_KEY} />
  </div>
);