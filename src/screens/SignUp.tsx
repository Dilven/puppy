import React from 'react';
import { SignUpForm } from '../components/SignUp/SignUpForm';
import { SingUpSteps } from '../components/SignUp/SignUpSteps';

export const SignUp = () => (
  <div>
    <h2>Sing Up</h2>
    <SignUpForm />
    <SingUpSteps />
  </div>
);