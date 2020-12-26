import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import React from 'react';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Results } from '../../../components/Results/Results';
import { ResultsPageHeader } from '../../../components/ResultsPageHeader';
import { SERIES_TYPE } from '../../../constants/resource-types';
import { getInitialQuery } from '../../../helpers/initial-query';
import { validateSearchQuery } from '../../../helpers/validation';
import { InternalApi } from '../../../services/internal-api';

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const queryClient = new QueryClient();
  const searchParams = validateSearchQuery(getInitialQuery(query));
  await queryClient.prefetchQuery([SERIES_TYPE, searchParams], async () => InternalApi.searchSeries(searchParams));
  return {
    props: { searchParams, dehydratedState: dehydrate(queryClient) },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const ResultsSeries = ({ searchParams }: Props) => {
  const {
    data,
    isLoading,
    error,
  } = useQuery([SERIES_TYPE, searchParams], async () => InternalApi.searchSeries(searchParams));

  return (
    <>
      <ResultsPageHeader title="Series results" />
      <Results data={data} isLoading={isLoading} isError={!!error} />
    </>
  );
};

export default ResultsSeries;
