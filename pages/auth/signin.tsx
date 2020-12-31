// TODO
/* eslint-disable react/button-has-type */
import React from 'react';
import { providers as requestProviders, signIn } from 'next-auth/client';
import { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
  return {
    props: {
      providers: await requestProviders(),
    },
  };
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

export default function SignIn({ providers }: Props) {
  return (
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
}
