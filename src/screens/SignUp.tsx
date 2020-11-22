import React from 'react';
import { SignUpForm } from '../components/SignUp/SignUpForm';
import { SingUpSteps } from '../components/SignUp/SignUpSteps';
import { useSignUp } from '../hooks/useSignUp';

export const SignUp = () => {
  const{ step, status, signUp } = useSignUp();
  return (
    <section>
      <h2>Sing Up</h2>
      <SignUpForm signUp={signUp} />
      <SingUpSteps step={step} status={status} />
    </section>
  )
}