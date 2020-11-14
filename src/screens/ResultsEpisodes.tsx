import React from 'react';
import { useQuery,  useQueryCache } from 'react-query'
import { searchEpisodes } from '../api';
import { ResultsList } from '../components/ResultsList';
import { EPISODES_QUERY_KEY } from '../constants/queriesKeys';
import { useSearchParams } from '../hooks/useSearchParams';

export const ResultsEpisodes = () => {
  useQueryCache();
  const searchParams = useSearchParams()
  const { data, isLoading } = useQuery(EPISODES_QUERY_KEY, searchEpisodes(searchParams))

  return (
    <ResultsList data={data} isLoading={isLoading} />
  )
}