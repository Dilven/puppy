import React from 'react';
import { useQuery } from 'react-query';
import { getSerie } from '../../helpers/api';
import { Error } from '../../components/Error';
import { SeriePreview } from '../../components/SeriePreview';
import { Spin } from 'antd';

export const Series = () => {
  const { id } = router.query
  const { data, isLoading, error } = useQuery(id, () => getSerie(id), {
    retry: false,
  })
  
  if(isLoading) return <Spin size="large" />
  if(!data || error) return <Error />

  return (
    <SeriePreview {...data} />
  )
}