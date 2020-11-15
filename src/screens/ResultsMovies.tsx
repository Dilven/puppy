import React from 'react';
import { useQuery } from 'react-query'
import { searchMovies } from '../api';
import { Results } from '../components/Form/Results/Results';
import { ResultsPageHeader } from '../components/ResultsPageHeader';
import { MOVIES_QUERY_KEY } from '../constants/queries-keys';
import { useSearchParams } from '../hooks/useSearchParams';
import { SearchParams } from '../models/search-params';

export const ResultsMovies = () => {
  const searchParams = useSearchParams()
  const { data, isLoading } = useQuery([MOVIES_QUERY_KEY, searchParams], async (_key, params: SearchParams) => await searchMovies(params))

  return (
    <>
      <ResultsPageHeader title="Movies results" />
      <Results data={data} isLoading={isLoading} />
    </>
  )
}