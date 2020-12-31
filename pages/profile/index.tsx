import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getSession, useSession } from 'next-auth/client';
import React from 'react';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const ssrSession = await getSession(context)
  if (!ssrSession) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: { ssrSession },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Profile = ({ ssrSession }: Props) => {
  const [session = ssrSession] = useSession();

  return (
    <div>
      <p>{session.user.name}</p>
      <p>{session.user.email}</p>
      <p>{session.user.image}</p>
    </div>
  )
};

export default Profile;
