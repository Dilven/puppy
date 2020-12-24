import React from 'react';
import { useQuery } from 'react-query';
import { Spin } from 'antd';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Error } from '../../components/Error';
import { MoviePreview } from '../../components/MoviePreview';
import { InternalApi } from '../../services/internal-api';
import { ExternalService } from '../../services/external-api';
import { validateGetQuery } from '../../helpers/validation';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = validateGetQuery({ id: params?.id });
  const initialData = await ExternalService.getMovie(id);
  return {
    props: { id, initialData },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Movie = ({ id, initialData }: Props) => {
  const { data, isLoading, error } = useQuery(id, () => InternalApi.getMovie(id), {
    initialData,
    retry: false,
  });

  if (isLoading) return <Spin size="large" />;
  if (!data || error) return <Error />;

  return (
    <MoviePreview {...data} />
  );
};

export default Movie;
