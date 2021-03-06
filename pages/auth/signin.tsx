// TODO
/* eslint-disable react/button-has-type */
import React from 'react';
import { providers as requestProviders } from 'next-auth/client';
import { InferGetStaticPropsType } from 'next';
import { AuthProviders } from '../../components/Auth/AuthProviders';
import { paths } from '../../config/paths';

export const getStaticProps = async () => ({
  props: {
    providers: await requestProviders(),
  },
});

type Props = InferGetStaticPropsType<typeof getStaticProps>

const SignIn = ({ providers }: Props) => (
  <div>
    <p>Choose method to log in to your account</p>
    <AuthProviders providers={providers} />
    <p>
      You don`&apos;t have account?
      <a href={paths.signUp}>Sign up</a>
    </p>
  </div>
);

export default SignIn;
