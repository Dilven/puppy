import React from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router'
import { getSerie } from '../../helpers/api';
import { Error } from '../../components/Error';
import { SeriePreview } from '../../components/SeriePreview';
import { Spin } from 'antd';

const Serie = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, error } = useQuery(id, () => getSerie(id as string), {
    retry: false,
  })
  
  if(isLoading) return <Spin size="large" />
  if(!data || error) return <Error />

  return (
    <SeriePreview {...data} />
  )
}

export default Serie;
