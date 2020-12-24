import React from 'react';
import { useQuery } from 'react-query'
import { Results } from '../../../components/Results/Results';
import { ResultsPageHeader } from '../../../components/ResultsPageHeader';
import { SERIES_QUERY_KEY } from '../../../constants/queries-keys';
import { InternalApi } from '../../../services/internal-api';
import { useSearchParams } from '../../../hooks/useSearchParams';

const ResultsSeries = () => {
  const searchParams = useSearchParams()
  const { data, isLoading, error } = useQuery([SERIES_QUERY_KEY, searchParams], async () => await InternalApi.searchSeries(searchParams))
  
  return (
    <>
      <ResultsPageHeader title="Series results" />
      <Results data={data} isLoading={isLoading} isError={!!error} />
    </>
  )
}

export default ResultsSeries;