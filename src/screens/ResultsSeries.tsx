import React from 'react';
import { useQuery,  useQueryCache } from 'react-query'
import { searchSeries } from '../api';
import { ResultsList } from '../components/ResultsList';
import { ResultsPageHeader } from '../components/ResultsPageHeader';
import { SERIES_QUERY_KEY } from '../constants/queriesKeys';
import { useSearchParams } from '../hooks/useSearchParams';

export const ResultsSeries = () => {
  useQueryCache();
  const searchParams = useSearchParams()
  const { data, isLoading } = useQuery(SERIES_QUERY_KEY, searchSeries(searchParams))
  
  return (
    <>
      <ResultsPageHeader title="Series results" />
      <ResultsList data={data} isLoading={isLoading} />
    </>
  )
}