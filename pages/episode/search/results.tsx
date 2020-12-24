import React from 'react';
import { useQuery } from 'react-query'
import { Results } from '../../../components/Results/Results';
import { ResultsPageHeader } from '../../../components/ResultsPageHeader';
import { EPISODES_QUERY_KEY } from '../../../constants/queries-keys';
import { InternalApi } from '../../../services/internal-api';
import { useSearchParams } from '../../../hooks/useSearchParams';

const ResultsEpisodes = () => {
  const searchParams = useSearchParams()
  const { data, isLoading, error } = useQuery([EPISODES_QUERY_KEY, searchParams], async () => await InternalApi.searchEpisodes(searchParams))

  return (
    <>
      <ResultsPageHeader title="Episodes results" />
      <Results data={data} isLoading={isLoading} isError={!!error} />
    </>
  )
}

export default ResultsEpisodes;