import React from 'react';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Results } from '../../../components/Results/Results';
import { ResultsPageHeader } from '../../../components/ResultsPageHeader';
import { MOVIE_TYPE } from '../../../constants/resource-types';
import { InternalApi } from '../../../services/internal-api';
import { getInitialQuery } from '../../../helpers/initial-query';
import { validateSearchQuery } from '../../../helpers/validation';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient();
  const searchParams = validateSearchQuery(getInitialQuery(query));
  await queryClient.prefetchQuery([MOVIE_TYPE, searchParams], () => InternalApi.searchMovies(searchParams));
  return {
    props: { searchParams, dehydratedState: dehydrate(queryClient) },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const ResultsMovies = ({ searchParams }: Props) => {
  const {
    data,
    isLoading,
    error,
  } = useQuery([MOVIE_TYPE, searchParams], () => InternalApi.searchMovies(searchParams));

  return (
    <>
      <ResultsPageHeader title="Movies results" />
      <Results data={data} isLoading={isLoading} isError={!!error} />
    </>
  );
};

export default ResultsMovies;
