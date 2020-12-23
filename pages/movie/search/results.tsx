import React from 'react';
import { useQuery } from 'react-query'
import { searchMovies } from '../../../client/helpers/queries';
import { Results } from '../../../client/components/Results/Results';
import { ResultsPageHeader } from '../../../client/components/ResultsPageHeader';
import { MOVIES_QUERY_KEY } from '../../../client/constants/queries-keys';
import { useSearchParams } from '../../../client/hooks/useSearchParams';

const ResultsMovies = () => {
  const searchParams = useSearchParams()
  const { data, isLoading, error } = useQuery([MOVIES_QUERY_KEY, searchParams], async () => await searchMovies(searchParams))

  return (
    <>
      <ResultsPageHeader title="Movies results" />
      <Results data={data} isLoading={isLoading} isError={!!error} />
    </>
  )
}

export default ResultsMovies;