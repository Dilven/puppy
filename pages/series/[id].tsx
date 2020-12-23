import React from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router'
import { getSeries } from '../../helpers/queries';
import { Error } from '../../components/Error';
import { SeriesPreview } from '../../components/SeriePreview';
import { Spin } from 'antd';

const Series = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, error } = useQuery(id, () => getSeries(id as string), {
    retry: false,
  })
  
  if(isLoading) return <Spin size="large" />
  if(!data || error) return <Error />

  return (
    <SeriesPreview {...data} />
  )
}

export default Series;