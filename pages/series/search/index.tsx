import React from 'react';
import { paths } from '../../../config/paths';
import { SERIES_TYPE } from '../../../constants/resource-types';
import { InternalApi } from '../../../services/internal-api';
import { Form } from '../../../components/Form/Form';

const SearchSeries = () => (
  <div>
    <h2>Search series</h2>
    <Form query={InternalApi.searchSeries} queryKey={SERIES_TYPE} redirectPath={paths.searchSeriesResults} />
  </div>
);

export default SearchSeries;
