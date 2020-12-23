import React from 'react';
import { useQuery } from 'react-query';
import { Error } from '../../client/components/Error';
import { SeriesPreview } from '../../client/components/SeriePreview';
import { Spin } from 'antd';
import { getSeries } from '../../client/helpers/api';
import { useQueryId } from '../../client/hooks/useQueryId';
import { GetStaticProps } from 'next';
import { initialParams } from '../../client/helpers/initial-params';

const Series = () => {
  const id = useQueryId();
  const { data, isLoading, error } = useQuery(id, () => getSeries(id), {
    retry: false,
  })
  
  if(isLoading) return <Spin size="large" />
  if(!data || error) return <Error />

  return (
    <SeriesPreview {...data} />
  )
}

export const getServerSideProps: GetStaticProps = initialParams;

export default Series;
