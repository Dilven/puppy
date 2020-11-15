import React from 'react';
import { useQuery } from 'react-query'
import { SearchParams, searchSeries } from '../api';
import { Results } from '../components/Form/Results/Results';
import { ResultsPageHeader } from '../components/ResultsPageHeader';
import { SERIES_QUERY_KEY } from '../constants/queriesKeys';
import { useSearchParams } from '../hooks/useSearchParams';

export const ResultsSeries = () => {
  const searchParams = useSearchParams()

  const { data, isLoading } = useQuery([SERIES_QUERY_KEY, searchParams], async (_key, params: SearchParams) => await searchSeries(params))
  
  return (
    <div>
      <ResultsPageHeader title="Series results" />
      <Results data={data} isLoading={isLoading} />
    </div>
  )
}