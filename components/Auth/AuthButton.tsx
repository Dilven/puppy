/* eslint-disable jsx-a11y/click-events-have-key-events */
// TODO
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
import React, { useCallback, useMemo } from 'react';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';
import { signIn } from 'next-auth/client';
import styles from './AuthButton.module.css';

const renderIcon = (id?: string) => {
  switch (id) {
    case 'github':
      return <GithubOutlined />;
    default:
      return <MailOutlined />;
  }
};

const getTitle = (name: string, isSignUp?: boolean) => {
  let title = isSignUp ? 'Sign up' : 'Sign in';
  title += ` with ${name}`;
  return title;
};

type Props = {
  isSignUp?: boolean;
  id?: string;
  name: string;
}

export const AuthButton = ({ id, name, isSignUp }: Props) => {
  const signInMemo = useCallback(() => signIn(id), []);
  return (
    <div
      className={styles.authButton}
      onClick={signInMemo}
    >
      <div className={styles.icon}>{renderIcon(id)}</div>
      <span className={styles.title}>{getTitle(name, isSignUp)}</span>
    </div>
  )
};
