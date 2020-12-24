import React from 'react';
import { useQuery } from 'react-query'
import { Results } from '../../../components/Results/Results';
import { ResultsPageHeader } from '../../../components/ResultsPageHeader';
import { MOVIES_QUERY_KEY } from '../../../constants/queries-keys';
import { InternalApi } from '../../../services/internal-api';
import { getInitialQuery } from '../../../helpers/initial-query';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ExternalService } from '../../../services/external-api';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const searchParams = getInitialQuery(query)
  const initialData = await ExternalService.searchMovies(searchParams)
  return {
    props: { searchParams, initialData }
 }
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const ResultsMovies = ({ searchParams, initialData }: Props) => {
  const { data, isLoading, error } = useQuery([MOVIES_QUERY_KEY, searchParams], async () => await InternalApi.searchMovies(searchParams), { initialData })

  return (
    <>
      <ResultsPageHeader title="Movies results" />
      <Results data={data} isLoading={isLoading} isError={!!error} />
    </>
  )
}

export default ResultsMovies;