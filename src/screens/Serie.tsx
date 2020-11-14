import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getSerie } from '../api';
import { ErrorPreview } from '../components/ErrorPreview';
import { SeriePreview } from '../components/SeriePreview';
import { Spin } from 'antd';

export const Serie = () => {
  const { id } = useParams<{id: string}>();
  const { data, isLoading, error } = useQuery(id, getSerie(id), {
    retry: false,
  })
  
  if(isLoading) return <Spin size="large" />
  if(!data || error) return <ErrorPreview />

  return (
    <SeriePreview {...data} />
  )
}