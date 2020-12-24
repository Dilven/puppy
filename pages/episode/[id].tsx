import React from 'react';
import { useQuery } from 'react-query';
import { Error } from '../../components/Error';
import { Spin } from 'antd';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ExternalService } from '../../services/external-api';
import { InternalApi } from '../../services/internal-api';
import { getInitialParams } from '../../helpers/initial-params';
import { EpisodePreview } from '../../components/EpisodePreview';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = getInitialParams(params)
  const initialData = await ExternalService.getEpisode(id)
  return {
    props: { id, initialData }
 }
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Episode = ({ id, initialData }: Props) => {
  const { data, isLoading, error } = useQuery(id, () => InternalApi.getEpisode(id), {
    initialData,
    retry: false,
  })
  if(isLoading) return <Spin size="large" />
  if(!data || error) return <Error />

  return (
    <EpisodePreview {...data}/>
  )
}

export default Episode;