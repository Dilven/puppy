import React from 'react';
import { useQuery, QueryClient } from 'react-query';
import { Spin } from 'antd';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { dehydrate } from 'react-query/hydration';
import { Error } from '../../components/Error';
import { InternalApi } from '../../services/internal-api';
import { EpisodePreview } from '../../components/EpisodePreview';
import { validateGetQuery } from '../../helpers/validation';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = validateGetQuery({ id: params?.id });
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(id, () => InternalApi.getEpisode(id));

  return {
    props: { id, dehydratedState: dehydrate(queryClient) },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Episode = ({ id }: Props) => {
  const { data, isLoading, error } = useQuery(id, () => InternalApi.getEpisode(id), {
    retry: false,
  });
  if (isLoading) return <Spin size="large" />;
  if (!data || error) return <Error />;

  return (
    <EpisodePreview {...data} />
  );
};

export default Episode;
