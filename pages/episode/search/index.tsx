import React from 'react';
import { Form } from '../../../components/Form/Form';
import { paths } from '../../../config/paths';
import { EPISODES_QUERY_KEY } from '../../../constants/queries-keys';
import { InternalApi } from '../../../services/internal-api';

const SearchEpisodes = () => (
  <div>
    <h2>Search episodes</h2>
    <Form query={InternalApi.searchEpisodes} queryKey={EPISODES_QUERY_KEY} redirectPath={paths.searchEpisodesResults}/>
  </div>
);

export default SearchEpisodes;