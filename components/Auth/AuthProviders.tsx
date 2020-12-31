/* eslint-disable react/button-has-type */
import React from 'react';
import { providers as requestProviders } from 'next-auth/client';
import { List } from 'antd';
import { AuthButton } from './AuthButton';

type PromiseResolve<T> = T extends PromiseLike<infer U> ? U : T;

type Providers = PromiseResolve<ReturnType<typeof requestProviders>>;

type Props = {
  providers: Providers,
  isSignUp?: boolean;
}

const defaultProviders = {
  Email: { name: 'email' },
};

export const AuthProviders = ({ providers, isSignUp }: Props) => (
  <List
    dataSource={Object.values({ ...providers, ...defaultProviders } || defaultProviders)}
    renderItem={({ name }) => (
      <List.Item>
        <AuthButton name={name} isSignUp={isSignUp} />
      </List.Item>
    )}
  />
);
