import React from 'react';
import { useQuery } from 'react-query';
import { getEpisode } from '../../client/helpers/api';
import { Error } from '../../client/components/Error';
import { Spin } from 'antd';
import { EpisodePreview } from '../../client/components/EpisodePreview';
import { useQueryId } from '../../client/hooks/useQueryId';
import { GetStaticProps } from 'next';
import { initialParams } from '../../client/helpers/initial-params';

const Episode = () => {
  const id = useQueryId();
  const { data, isLoading, error } = useQuery(id, () => getEpisode(id), {
    retry: false,
  })
  if(isLoading) return <Spin size="large" />
  if(!data || error) return <Error />

  return (
    <EpisodePreview {...data}/>
  )
}

export const getServerSideProps: GetStaticProps = initialParams;

export default Episode;