import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getEpisode } from '../api';
import { ErrorPreview } from '../components/ErrorPreview';
import { Spin } from 'antd';

export const Episode = () => {
  const { id } = useParams<{id: string}>();
  const { data, isLoading, error } = useQuery(id, getEpisode(id), {
    retry: false,
  })
  
  if(isLoading) return <Spin size="large" />
  if(!data || error) return <ErrorPreview />

  return (
    <div>xxx</div>
  )
}