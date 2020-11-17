import React from 'react';
import { useQuery } from 'react-query'
import { searchEpisodes } from '../helpers/api';
import { Results } from '../components/Results/Results';
import { ResultsPageHeader } from '../components/ResultsPageHeader';
import { EPISODES_QUERY_KEY } from '../constants/queries-keys';
import { useSearchParams } from '../hooks/useSearchParams';
import { SearchParams } from '../models/search-params';

export const ResultsEpisodes = () => {
  const searchParams = useSearchParams()
  const { data, isLoading } = useQuery([EPISODES_QUERY_KEY, searchParams], async (_key, params: SearchParams) => await searchEpisodes(params))

  return (
    <>
      <ResultsPageHeader title="Episodes results" />
      <Results data={data} isLoading={isLoading} />
    </>
  )
}