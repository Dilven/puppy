import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getEpisode } from '../helpers/api';
import { ErrorPreview } from '../components/ErrorPreview';
import { Spin } from 'antd';
import { EpisodePreview } from '../components/EpisodePreview';

export const Episode = () => {
  const { id } = useParams<{id: string}>();
  const { data, isLoading, error } = useQuery(id, getEpisode, {
    retry: false,
  })
  if(isLoading) return <Spin size="large" />
  if(!data || error) return <ErrorPreview />

  return (
    <EpisodePreview {...data}/>
  )
}