import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import type { NextApiRequest, NextApiResponse } from 'next';
import { logger } from '../../../helpers/logger';

const getGithubSecrets = () => {
  const fakeClientId = 'fake';
  const fakeClientSecret = 'fake';

  if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
    logger.error('set secrets for github app');
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
