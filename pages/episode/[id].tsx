import React from 'react';
import { useQuery } from 'react-query';
import { getEpisode } from '../../client/helpers/api';
import { Error } from '../../client/components/Error';
import { Spin } from 'antd';
import { EpisodePreview } from '../../client/components/EpisodePreview';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getInitialParams } from '../../client/helpers/initial-params';


export const getServerSideProps: GetServerSideProps = async ({ params}) => {
  const id = getInitialParams(params)
  const initialData = await getEpisode(id);
  return {
    props: { id, initialData }
 }
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Episode = ({ id, initialData }: Props) => {
  const { data, isLoading, error } = useQuery(id, () => getEpisode(id), {
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