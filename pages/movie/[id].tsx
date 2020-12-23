import React from 'react';
import { useQuery } from 'react-query';
import { Error } from '../../client/components/Error';
import { Spin } from 'antd';
import { MoviePreview } from '../../client/components/MoviePreview';
import { getMovie } from '../../client/helpers/api';
import { useQueryId } from '../../client/hooks/useQueryId';
import { GetStaticProps } from 'next';
import { initialParams } from '../../client/helpers/initial-params';

const Movie = () => {
  const id = useQueryId();
  const { data, isLoading, error } = useQuery(id, () => getMovie(id), {
    retry: false,
  })
  
  if(isLoading) return <Spin size="large" />
  if(!data || error) return <Error />

  return (
    <MoviePreview {...data}/>
  )
}

export const getServerSideProps: GetStaticProps = initialParams;

export default Movie;