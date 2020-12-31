/* eslint-disable react/button-has-type */
import React from 'react';
import { providers as requestProviders } from 'next-auth/client';
import { List, Card } from 'antd';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';

type PromiseResolve<T> = T extends PromiseLike<infer U> ? U : T;

type Providers = PromiseResolve<ReturnType<typeof requestProviders>>;

type Props = {
  providers: Providers,
  isSignUp?: boolean;
}

const renderIcon = (name: string) => {
  switch (name) {
    case 'GitHub':
      return <GithubOutlined />;
    default:
      return <MailOutlined />;
  }
};

const getTitle = (isSignUp: boolean, name: string) => {
  let title = isSignUp ? 'Sign up' : 'Sign in';
  title += ` with ${name}`;
  return title;
};

export const AuthProviders = ({ providers, isSignUp }: Props) => (
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
          <Card title={getTitle(isSignUp, name)}>{renderIcon(name)}</Card>
        </List.Item>
      )}
    />
  </>
);
