import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/client';
import React from 'react';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)
  return {
    props: { session }
  };
};

const Profile = () => (
  <p>My Profile</p>
);

export default Profile;
