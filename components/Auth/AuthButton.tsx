import React from 'react';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';
import styles from './AuthButton.module.css';

const renderIcon = (name: string) => {
  switch (name) {
    case 'GitHub':
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
  name: string,
  isSignUp?: boolean;
}

export const AuthButton = ({ name, isSignUp }: Props) => (
  <div className={styles.authButton}>
    <div className={styles.icon}>{renderIcon(name)}</div>
    <span className={styles.title}>{getTitle(name, isSignUp)}</span>
  </div>
);