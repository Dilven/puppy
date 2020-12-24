import React from 'react';
import { useQuery } from 'react-query'
import { Results } from '../../../components/Results/Results';
import { ResultsPageHeader } from '../../../components/ResultsPageHeader';
import { MOVIES_QUERY_KEY } from '../../../constants/queries-keys';
import { InternalApi } from '../../../services/internal-api';
import { useSearchParams } from '../../../hooks/useSearchParams';

const ResultsMovies = () => {
  const searchParams = useSearchParams()
  const { data, isLoading, error } = useQuery([MOVIES_QUERY_KEY, searchParams], async () => await InternalApi.searchMovies(searchParams))

  return (
    <>
      <ResultsPageHeader title="Movies results" />
      <Results data={data} isLoading={isLoading} isError={!!error} />
    </>
  )
}

export default ResultsMovies;