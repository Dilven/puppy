import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getMovie } from '../api';
import { ErrorPreview } from '../components/ErrorPreview';
import { Spin } from 'antd';

export const Movie = () => {
  const { id } = useParams<{id: string}>();
  const { data, isLoading, error } = useQuery(id, getMovie(id), {
    retry: false,
  })
  
  if(isLoading) return <Spin size="large" />
  if(!data || error) return <ErrorPreview />

  return (
    <div>eee</div>
  )
}