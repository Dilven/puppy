import React from 'react';
import { SignUpForm } from '../components/SignUp/SignUpForm';
import { SingUpSteps } from '../components/SignUp/SignUpSteps';
import { SignUpProvider } from '../providers/SignUpProvider';

export const SignUp = () => (
  <div>
    <SignUpProvider>
      <h2>Sing Up</h2>
      <SignUpForm />
      <SingUpSteps />
    </SignUpProvider>
  </div>
);