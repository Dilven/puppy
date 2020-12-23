import React from 'react';
import styles from './SignUpSection.module.css';

type Props = {
  children: React.ReactNode;
}

export const SignUpSection = ({ children }: Props) => (
  <article className={styles.signUpSection}>
    {children}
  </article>
)