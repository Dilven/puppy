import React from 'react';
import { useQuery } from 'react-query';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Results } from '../../../components/Results/Results';
import { ResultsPageHeader } from '../../../components/ResultsPageHeader';
import { MOVIE_TYPE } from '../../../constants/resource-types';
import { InternalApi } from '../../../services/internal-api';
import { getInitialQuery } from '../../../helpers/initial-query';
import { ExternalService } from '../../../services/external-api';
import { validateSearchQuery } from '../../../helpers/validation';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const searchParams = validateSearchQuery(getInitialQuery(query));
  const initialData = await ExternalService.searchMovies(searchParams);
  return {
    props: { searchParams, initialData },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const ResultsMovies = ({ searchParams, initialData }: Props) => {
  const {
    data,
    isLoading,
    error,
  } = useQuery([MOVIE_TYPE, searchParams], () => InternalApi.searchMovies(searchParams), { initialData });

  return (
    <>
      <ResultsPageHeader title="Movies results" />
      <Results data={data} isLoading={isLoading} isError={!!error} />
    </>
  );
};

export default ResultsMovies;
