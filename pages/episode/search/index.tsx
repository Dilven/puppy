import React from 'react';
import { Form } from '../../../components/Form/Form';
import { paths } from '../../../config/paths';
import { EPISODE_TYPE } from '../../../constants/resource-types';
import { InternalApi } from '../../../services/internal-api';

const SearchEpisodes = () => (
  <div>
    <h2>Search episodes</h2>
    <Form query={InternalApi.searchEpisodes} queryKey={EPISODE_TYPE} redirectPath={paths.searchEpisodesResults} />
  </div>
);

export default SearchEpisodes;
