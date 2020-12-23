import React from 'react';
import { Form } from '../../../client/components/Form/Form';
import { paths } from '../../../client/config/paths';
import { EPISODES_QUERY_KEY } from '../../../client/constants/queries-keys';
import { searchEpisodes } from '../../../client/helpers/api';

const SearchEpisodes = () => (
  <div>
    <h2>Search episodes</h2>
    <Form query={searchEpisodes} queryKey={EPISODES_QUERY_KEY} redirectPath={paths.searchEpisodesResults}/>
  </div>
);

export default SearchEpisodes;