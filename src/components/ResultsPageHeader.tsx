import React from 'react';
import { PageHeader, Button, Descriptions } from 'antd';
import { useSearchParams } from '../hooks/useSearchParams';

type Props = {
  title: string;
}

export const ResultsPageHeader = ({ title }: Props) => {
  const { year, name, plot, page, } = useSearchParams();
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
        {plot && <Descriptions.Item label="Plot">{plot}</Descriptions.Item>}
        {page && <Descriptions.Item label="Page">{page}</Descriptions.Item>}
      </Descriptions>
    </PageHeader>
  )
}