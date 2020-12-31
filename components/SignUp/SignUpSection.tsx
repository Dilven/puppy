import React from 'react';
import { useSignUp } from '../../hooks/useSignUp';
import { SignUpForm } from './SignUpForm';
import styles from './SignUpSection.module.css';
import { SingUpSteps } from './SignUpSteps';

export const SignUpSection = () => {
  const { step, status, signUp } = useSignUp();

  return (
    <article className={styles.signUpSection}>
      <h2>Sing Up</h2>
      <SingUpSteps step={step} status={status} />
      <SignUpForm signUp={signUp} />
    </article>
  );
};
