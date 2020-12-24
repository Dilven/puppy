import React from 'react';
import { useQuery } from 'react-query';
import { Error } from '../../client/components/Error';
import { SeriesPreview } from '../../client/components/SeriePreview';
import { Spin } from 'antd';
import { getSeries } from '../../client/helpers/api';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getInitialParams } from '../../client/helpers/initial-params';
import { ExternalService } from '../../shared/external-service'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = getInitialParams(params)
  const initialData = await ExternalService.getSeries(id)
  return {
    props: { id, initialData }
 }
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Series = ({ id, initialData }: Props) => {
  const { data, isLoading, error } = useQuery(id, () => getSeries(id), {
    initialData,
    retry: false,
  })
  
  if(isLoading) return <Spin size="large" />
  if(!data || error) return <Error />

  return (
    <SeriesPreview {...data} />
  )
}

export default Series;
