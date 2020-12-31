/* eslint-disable react/button-has-type */
import React from 'react';
import { providers as requestProviders } from 'next-auth/client';
import { List, Card } from 'antd';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';
type PromiseResolve<T> = T extends PromiseLike<infer U> ? U : T;

type Providers = PromiseResolve<ReturnType<typeof requestProviders>>;

type Props = {
  providers: Providers
}

const renderIcon = (name: string) => {
  switch (name) {
    case 'GitHub':
      return <GithubOutlined />;
    default:
      return <MailOutlined />;
  }
};

export const AuthProviders = ({ providers }: Props) => (
  <>
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={Object.values(providers || {})}
      renderItem={({ name }) => (
        <List.Item>
          <Card title={`Sign in with ${name}`}>{renderIcon(name)}</Card>
        </List.Item>
      )}
    />
  </>
);
