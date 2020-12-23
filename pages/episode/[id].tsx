import React from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router'
import { getEpisode } from '../../client/helpers/api';
import { Error } from '../../client/components/Error';
import { Spin } from 'antd';
import { EpisodePreview } from '../../client/components/EpisodePreview';

const Episode = () => {
  const router = useRouter()
  //TODO 
  const { id } = router.query
  const { data, isLoading, error } = useQuery(id, () => getEpisode(id as string), {
    retry: false,
  })
  if(isLoading) return <Spin size="large" />
  if(!data || error) return <Error />

  return (
    <EpisodePreview {...data}/>
  )
}

export default Episode;