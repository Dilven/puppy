import React from 'react';
import { useQuery } from 'react-query'
import { Results } from '../../../client/components/Results/Results';
import { ResultsPageHeader } from '../../../client/components/ResultsPageHeader';
import { EPISODES_QUERY_KEY } from '../../../client/constants/queries-keys';
import { searchEpisodes } from '../../../client/helpers/api';
import { useSearchParams } from '../../../client/hooks/useSearchParams';

const ResultsEpisodes = () => {
  const searchParams = useSearchParams()
  const { data, isLoading, error } = useQuery([EPISODES_QUERY_KEY, searchParams], async () => await searchEpisodes(searchParams))

  return (
    <>
      <ResultsPageHeader title="Episodes results" />
      <Results data={data} isLoading={isLoading} isError={!!error} />
    </>
  )
}

export default ResultsEpisodes;