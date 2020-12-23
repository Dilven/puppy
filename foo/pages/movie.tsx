import React from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router'
import { getMovie } from '../helpers/api'
import { Error } from '../components/Error';
import { Spin } from 'antd';
import { MoviePreview } from '../components/MoviePreview';

const Movie = () => {
  const router = useRouter()
  const { pid } = router.query
  const { data, isLoading, error } = useQuery(pid, getMovie, {
    retry: false,
  })
  
  if(isLoading) return <Spin size="large" />
  if(!data || error) return <Error />

  return (
    <MoviePreview {...data}/>
  )
}

export default Movie