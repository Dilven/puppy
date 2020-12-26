// TODO
/* eslint-disable no-console */
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import type { NextApiRequest, NextApiResponse } from 'next';

const getGithubSecrets = () => {
  const fakeClientId = 'fake';
  const fakeClientSecret = 'fake';

  if (process.env.GITHUB_ID || process.env.GITHUB_SECRET) {
    console.error('provide secrets for github app');
  }
  return ({
    clientId: process.env.GITHUB_ID || fakeClientId,
    clientSecret: process.env.GITHUB_SECRET || fakeClientSecret,
  });
};

const options = {
  providers: [
    Providers.GitHub(getGithubSecrets()),
  ],
  // TODO
  // database: process.env.DATABASE_URL,
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);