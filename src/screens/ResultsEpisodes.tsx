import React from 'react';
import { useQuery } from 'react-query'
import { searchEpisodes, SearchParams } from '../api';
import { ResultsList } from '../components/ResultsList';
import { ResultsPageHeader } from '../components/ResultsPageHeader';
import { EPISODES_QUERY_KEY } from '../constants/queriesKeys';
import { useSearchParams } from '../hooks/useSearchParams';

export const ResultsEpisodes = () => {
  const searchParams = useSearchParams()
  const { data, isLoading } = useQuery([EPISODES_QUERY_KEY, searchParams], async (_key, params: SearchParams) => await searchEpisodes(params))

  return (
    <>
      <ResultsPageHeader title="Episodes results" />
      <ResultsList data={data} isLoading={isLoading} />
    </>
  )
}