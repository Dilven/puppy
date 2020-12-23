import React from 'react';
import { useQuery } from 'react-query'
import { searchMovies } from '../../helpers/api';
import { Results } from '../../components/Results/Results';
import { ResultsPageHeader } from '../../components/ResultsPageHeader';
import { MOVIES_QUERY_KEY } from '../../constants/queries-keys';
import { useSearchParams } from '../../hooks/useSearchParams';
import { SearchParams } from '../../models/search-params';

export const ResultsMovies = () => {
  const searchParams = useSearchParams()
  const { data, isLoading, error } = useQuery([MOVIES_QUERY_KEY, searchParams], async (_key, params: SearchParams) => await searchMovies(params))

  return (
    <>
      <ResultsPageHeader title="Movies results" />
      <Results data={data} isLoading={isLoading} isError={!!error} />
    </>
  )
}