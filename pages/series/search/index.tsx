import React from 'react';
import { paths } from '../../../config/paths';
import { SERIES_QUERY_KEY } from '../../../constants/queries-keys';
import { InternalApi } from '../../../services/internal-api';
import { Form } from '../../../components/Form/Form';

const SearchSeries = () => (
  <div>
    <h2>Search series</h2>
    <Form query={InternalApi.searchSeries} queryKey={SERIES_QUERY_KEY} redirectPath={paths.searchSeriesResults}/>
  </div>
);

export default SearchSeries;