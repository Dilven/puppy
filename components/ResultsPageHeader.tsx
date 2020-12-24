import React from 'react';
import { PageHeader, Button, Descriptions } from 'antd';
import { useRouter } from 'next/router';
import { getInitialQuery } from '../helpers/initial-query';

type Props = {
  title: string;
}

export const ResultsPageHeader = ({ title }: Props) => {
  const { query } = useRouter();
  const { year, name } = getInitialQuery(query);
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
  );
};
