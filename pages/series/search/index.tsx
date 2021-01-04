import React from 'react';
import Link from 'next/link';
import { paths } from '../../../config/paths';
import { SERIES_TYPE } from '../../../constants/resource-types';
import { InternalApi } from '../../../services/internal-api';
import { Form } from '../../../components/Form/Form';

const SearchSeries = () => (
  <div>
    <h2>Search series</h2>
    <Form query={InternalApi.searchSeries} queryKey={SERIES_TYPE} redirectPath={paths.searchSeriesResults} />
    <Link shallow href="/series/search/results?name=friends&page=1">XXXX</Link>
  </div>
);

export default SearchSeries;
