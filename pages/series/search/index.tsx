import Form from 'antd/lib/form/Form';
import React from 'react';
import { paths } from '../../../client/config/paths';
import { SERIES_QUERY_KEY } from '../../../client/constants/queries-keys';
import { searchSeries } from '../../../client/helpers/api';

const SearchSeries = () => (
  <div>
    <h2>Search series</h2>
    <Form query={searchSeries} queryKey={SERIES_QUERY_KEY} redirectPath={paths.searchSeriesResults}/>
  </div>
);

export default SearchSeries;