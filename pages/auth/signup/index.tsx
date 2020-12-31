import React from 'react';
import { providers as requestProviders } from 'next-auth/client';
import { InferGetStaticPropsType } from 'next';
import { AuthProviders } from '../../../components/Auth/AuthProviders';

export const getStaticProps = async () => ({
  props: {
    providers: await requestProviders(),
  },
});

type Props = InferGetStaticPropsType<typeof getStaticProps>

const SignUp = ({ providers }: Props) => (
  <AuthProviders providers={providers} isSignUp />
);

export default SignUp;
