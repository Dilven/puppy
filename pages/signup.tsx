import React from 'react';
import { SignUpForm } from '../components/SignUp/SignUpForm';
import { SignUpSection } from '../components/SignUp/SignUpSection';
import { SingUpSteps } from '../components/SignUp/SignUpSteps';
import { useSignUp } from '../hooks/useSignUp';

const SignUp = () => {
  const{ step, status, signUp } = useSignUp();
  
  return (
    <SignUpSection>
      <h2>Sing Up</h2>
      <SingUpSteps step={step} status={status} />
      <SignUpForm signUp={signUp} />
    </SignUpSection>
  )
}

export default SignUp;