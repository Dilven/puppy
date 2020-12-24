import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import { useQuery } from 'react-query'
import { Results } from '../../../components/Results/Results';
import { ResultsPageHeader } from '../../../components/ResultsPageHeader';
import { SERIES_QUERY_KEY } from '../../../constants/queries-keys';
import { getInitialQuery } from '../../../helpers/initial-query';
import { ExternalService } from '../../../services/external-api';
import { InternalApi } from '../../../services/internal-api';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const searchParams = getInitialQuery(query)
  const initialData = await ExternalService.searchSeries(searchParams)
  return {
    props: { searchParams, initialData }
 }
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const ResultsSeries = ({ searchParams, initialData }: Props) => {
  const { data, isLoading, error } = useQuery([SERIES_QUERY_KEY, searchParams], async () => await InternalApi.searchSeries(searchParams), { initialData })
  
  return (
    <>
      <ResultsPageHeader title="Series results" />
      <Results data={data} isLoading={isLoading} isError={!!error} />
    </>
  )
}

export default ResultsSeries;