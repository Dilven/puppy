import React from 'react';
import { useQuery } from 'react-query'
import { searchSeries } from '../../../client/helpers/queries';
import { Results } from '../../../client/components/Results/Results';
import { ResultsPageHeader } from '../../../client/components/ResultsPageHeader';
import { SERIES_QUERY_KEY } from '../../../client/constants/queries-keys';
import { useSearchParams } from '../../../client/hooks/useSearchParams';

const ResultsSeries = () => {
  const searchParams = useSearchParams()

  const { data, isLoading, error } = useQuery([SERIES_QUERY_KEY, searchParams], async () => await searchSeries(searchParams))
  
  return (
    <>
      <ResultsPageHeader title="Series results" />
      <Results data={data} isLoading={isLoading} isError={!!error} />
    </>
  )
}

export default ResultsSeries;