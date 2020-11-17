import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getMovie } from '../helpers/api';
import { ErrorPreview } from '../components/ErrorPreview';
import { Spin } from 'antd';
import { MoviePreview } from '../components/MoviePreview';

export const Movie = () => {
  const { id } = useParams<{id: string}>();
  const { data, isLoading, error } = useQuery(id, getMovie, {
    retry: false,
  })
  
  if(isLoading) return <Spin size="large" />
  if(!data || error) return <ErrorPreview />

  return (
    <MoviePreview {...data}/>
  )
}