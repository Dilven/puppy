// TODO
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { providers as requestProviders } from 'next-auth/client';
import { InferGetStaticPropsType } from 'next';
import { AuthProviders } from '../../../components/Auth/AuthProviders';

export async function getStaticProps() {
  return {
    props: {
      providers: await requestProviders(),
    },
  };
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

const SignUp = ({ providers }: Props) => (
  <AuthProviders providers={providers} isSignUp />
);

export default SignUp;
