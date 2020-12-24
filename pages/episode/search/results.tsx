import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import { useQuery } from 'react-query'
import { Results } from '../../../components/Results/Results';
import { ResultsPageHeader } from '../../../components/ResultsPageHeader';
import { EPISODE_TYPE } from '../../../constants/resource-types';
import { getInitialQuery } from '../../../helpers/initial-query';
import { validateSearchQuery } from '../../../helpers/validation';
import { ExternalService } from '../../../services/external-api';
import { InternalApi } from '../../../services/internal-api';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const searchParams = validateSearchQuery(getInitialQuery(query))
  const initialData = await ExternalService.searchMovies(searchParams)
  return {
    props: { searchParams, initialData }
 }
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const ResultsEpisodes = ({ searchParams, initialData }: Props) => {
  const { data, isLoading, error } = useQuery([EPISODE_TYPE, searchParams], async () => await InternalApi.searchEpisodes(searchParams), { initialData })

  return (
    <>
      <ResultsPageHeader title="Episodes results" />
      <Results data={data} isLoading={isLoading} isError={!!error} />
    </>
  )
}

export default ResultsEpisodes;