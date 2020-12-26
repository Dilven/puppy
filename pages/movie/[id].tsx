import React from 'react';
import { QueryClient, useQuery } from 'react-query';
import { Spin } from 'antd';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { dehydrate } from 'react-query/hydration';
import { Error } from '../../components/Error';
import { MoviePreview } from '../../components/MoviePreview';
import { InternalApi } from '../../services/internal-api';
import { validateGetQuery } from '../../helpers/validation';

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  const { id } = validateGetQuery({ id: params?.id });
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(id, () => InternalApi.getMovie(id));

  return {
    props: { id, dehydratedState: dehydrate(queryClient) },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Movie = ({ id }: Props) => {
  const { data, isLoading, error } = useQuery(id, () => InternalApi.getMovie(id), {
    retry: false,
  });

  if (isLoading) return <Spin size="large" />;
  if (!data || error) return <Error />;

  return (
    <MoviePreview {...data} />
  );
};

export default Movie;
