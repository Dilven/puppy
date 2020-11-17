import React from 'react';
import { useQuery } from 'react-query'
import { searchSeries } from '../helpers/api';
import { Results } from '../components/Results/Results';
import { ResultsPageHeader } from '../components/ResultsPageHeader';
import { SERIES_QUERY_KEY } from '../constants/queries-keys';
import { useSearchParams } from '../hooks/useSearchParams';
import { SearchParams } from '../models/search-params';

export const ResultsSeries = () => {
  const searchParams = useSearchParams()

  const { data, isLoading } = useQuery([SERIES_QUERY_KEY, searchParams], async (_key, params: SearchParams) => await searchSeries(params))
  
  return (
    <>
      <ResultsPageHeader title="Series results" />
      <Results data={data} isLoading={isLoading} />
    </>
  )
}