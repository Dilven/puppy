import React from 'react';
import { searchEpisodes } from '../api';
import { Form } from '../components/Form';
import { paths } from '../config/paths';
import { EPISODES_QUERY_KEY } from '../constants/queriesKeys';

export const SearchEpisodes = () => (
  <div>
    <h2>Search episodes</h2>
    <Form query={searchEpisodes} queryKey={EPISODES_QUERY_KEY} redirectPath={paths.searchEpisodesResults}/>
  </div>
);