// TODO
/* eslint-disable react/button-has-type */
import React from 'react';
import { providers as requestProviders, signIn } from 'next-auth/client';
import { InferGetStaticPropsType } from 'next';
import { AuthProviders } from '../../components/Auth/AuthProviders';

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
    <AuthProviders providers={providers} />
  );
}
