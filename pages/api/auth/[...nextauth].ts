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

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, {
  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: null, // If set, new users will be directed here on first sign in
  },
  providers: [
    Providers.GitHub(getGithubSecrets()),
  ],
});
