import React from 'react';
import { useQuery } from 'react-query';
import { Error } from '../../client/components/Error';
import { Spin } from 'antd';
import { MoviePreview } from '../../client/components/MoviePreview';
import { getMovie } from '../../client/helpers/api';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getInitialParams } from '../../client/helpers/initial-params';

export const getServerSideProps: GetServerSideProps = async ({ params}) => {
  const id = getInitialParams(params)
  const initialData = await getMovie(id);
  return {
    props: { id, initialData }
 }
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Movie = ({ id, initialData }: Props) => {
  const { data, isLoading, error } = useQuery(id, () => getMovie(id), {
    initialData,
    retry: false,
  })
  
  if(isLoading) return <Spin size="large" />
  if(!data || error) return <Error />

  return (
    <MoviePreview {...data}/>
  )
}

export default Movie;