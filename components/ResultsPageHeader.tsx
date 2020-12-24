import React from 'react';
import { PageHeader, Button, Descriptions } from 'antd';
import { getInitialQuery } from '../helpers/initial-query';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

type OwnProps = {
  title: string;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const searchParams = getInitialQuery(query)
  return {
    props: { searchParams }
 }
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps> & OwnProps


export const ResultsPageHeader = ({ title, searchParams }: Props) => {
  const { year, name } = searchParams
  return (
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title={title}
      subTitle="100 results found"
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>,
      ]}
    >
      <Descriptions size="small" column={4}>
        {name && <Descriptions.Item label="Title">{name}</Descriptions.Item>}
        {year && <Descriptions.Item label="Year">{year}</Descriptions.Item>}
      </Descriptions>
    </PageHeader>
  )
}