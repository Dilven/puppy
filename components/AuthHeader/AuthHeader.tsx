// TODO
/* eslint-disable react/button-has-type */
import React, { useCallback } from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

export const AuthHeader = () => {
  const [session] = useSession();
  const signInMemo = useCallback(
    () => {
      console.log('xxxx');
      signIn();
    },
    [],
  );
  return (
    <>
      {!session && (
      <>
        Not signed in
        {' '}
        <br />
        <button onClick={signInMemo}>Sign in</button>
      </>
      )}
      {session && (
      <>
        Signed in as
        {' '}
        {session.user.email}
        {' '}
        <br />
        <button onClick={() => signOut}>Sign out</button>
      </>
      )}
    </>
  );
};
