import React from 'react';
import { useQuery } from 'react-query'
import { searchMovies, SearchParams } from '../api';
import { ResultsList } from '../components/ResultsList';
import { ResultsPageHeader } from '../components/ResultsPageHeader';
import { MOVIES_QUERY_KEY } from '../constants/queriesKeys';
import { useSearchParams } from '../hooks/useSearchParams';

export const ResultsMovies = () => {
  const searchParams = useSearchParams()
  const { data, isLoading } = useQuery([MOVIES_QUERY_KEY, searchParams], async (_key, params: SearchParams) => await searchMovies(params))

  return (
    <>
      <ResultsPageHeader title="Movies results" />
      <ResultsList data={data} isLoading={isLoading} />
    </>
  )
}