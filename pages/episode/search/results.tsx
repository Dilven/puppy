import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import React from 'react';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Results } from '../../../components/Results/Results';
import { ResultsPageHeader } from '../../../components/ResultsPageHeader';
import { EPISODE_TYPE } from '../../../constants/resource-types';
import { getInitialQuery } from '../../../helpers/initial-query';
import { validateSearchQuery } from '../../../helpers/validation';
import { InternalApi } from '../../../services/internal-api';
import { ExternalService } from '../../../services/external-api';

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const queryClient = new QueryClient();
  const searchParams = validateSearchQuery(getInitialQuery(query));
  await queryClient.prefetchQuery([EPISODE_TYPE, searchParams], () => ExternalService.searchEpisodes(searchParams));
  return {
    props: { searchParams, dehydratedState: dehydrate(queryClient) },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const ResultsEpisodes = ({ searchParams }: Props) => {
  const {
    data,
    isLoading,
    error,
  } = useQuery([EPISODE_TYPE, searchParams], () => InternalApi.searchEpisodes(searchParams));

  return (
    <>
      <ResultsPageHeader title="Episodes results" />
      <Results data={data} isLoading={isLoading} isError={!!error} />
    </>
  );
};

export default ResultsEpisodes;
