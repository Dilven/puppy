import React from 'react';
import { searchSeries } from '../../../helpers/queries';
import { Form } from '../../../components/Form/Form';
import { paths } from '../../../config/paths';
import { SERIES_QUERY_KEY } from '../../../constants/queries-keys';

const SearchSeries = () => (
  <div>
    <h2>Search series</h2>
    <Form query={searchSeries} queryKey={SERIES_QUERY_KEY} redirectPath={paths.searchSeriesResults}/>
  </div>
);

export default SearchSeries;