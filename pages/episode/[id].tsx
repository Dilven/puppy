import React from 'react';
import { useQuery } from 'react-query';
import { Error } from '../../components/Error';
import { Spin } from 'antd';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ExternalService } from '../../services/external-api';
import { InternalApi } from '../../services/internal-api';
import { EpisodePreview } from '../../components/EpisodePreview';
import { validateGetQuery } from '../../helpers/validation';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = validateGetQuery({ id: params.id })
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