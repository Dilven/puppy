/* eslint-disable react/button-has-type */
import React from 'react';
import { providers as requestProviders, signIn } from 'next-auth/client';

type PromiseResolve<T> = T extends PromiseLike<infer U> ? U : T;

type Providers = PromiseResolve<ReturnType<typeof requestProviders>>;

type Props = {
  providers: Providers
}

export const AuthProviders = ({ providers }: Props) => (
  <>
    {Object.values(providers).map((provider) => (
      <div key={provider.name}>
        <button onClick={() => signIn(provider.id)}>
          Sign in with
          {provider.name}
        </button>
      </div>
    ))}
  </>
);
