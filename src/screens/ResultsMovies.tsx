import React from 'react';
import { useQuery,  useQueryCache } from 'react-query'
import { getMovies } from '../api';
import { ResultsList } from '../components/ResultsList';
import { MOVIES_QUERY_KEY } from '../constants/queriesKeys';
import { useSearchParams } from '../hooks/useSearchParams';

export const ResultsMovies = () => {
  useQueryCache();
  const searchParams = useSearchParams()
  const { data, isLoading } = useQuery(MOVIES_QUERY_KEY, getMovies(searchParams))

  return (
    <ResultsList data={data} isLoading={isLoading} />
  )
}