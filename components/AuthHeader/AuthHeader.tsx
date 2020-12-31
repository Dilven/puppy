// TODO
/* eslint-disable react/button-has-type */
import React, { useCallback } from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

export const AuthHeader = () => {
  const [session] = useSession();
  const signInMemo = useCallback(() => signIn, []);
  const signOutMemo = useCallback(() => signOut, []);
  
  return (
    <>
      {!session && (
      <>
        <button onClick={signInMemo}>Sign in</button>
      </>
      )}
      {session && (
      <>
        <button onClick={signOutMemo}>Sign out</button>
      </>
      )}
    </>
  );
};
