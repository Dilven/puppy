import React from 'react';
import { useQuery } from 'react-query';
import { Spin } from 'antd';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Error } from '../../components/Error';
import { SeriesPreview } from '../../components/SeriePreview';
import { InternalApi } from '../../services/internal-api';
import { ExternalService } from '../../services/external-api';
import { validateGetQuery } from '../../helpers/validation';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = validateGetQuery({ id: params?.id });
  const initialData = await ExternalService.getSeries(id);
  return {
    props: { id, initialData },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Series = ({ id, initialData }: Props) => {
  const { data, isLoading, error } = useQuery(id, () => InternalApi.getSeries(id), {
    initialData,
    retry: false,
  });

  if (isLoading) return <Spin size="large" />;
  if (!data || error) return <Error />;

  return (
    <SeriesPreview {...data} />
  );
};

export default Series;
