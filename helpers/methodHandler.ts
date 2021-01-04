import Boom from '@hapi/boom';
import type { NextApiHandler, NextApiResponse, NextApiRequest } from 'next';

const methods = ['get', 'delete', 'head', 'options', 'post', 'put', 'patch', 'purge', 'link', 'unlink'] as const;
type MethodsLowerCase = typeof methods[number];
type HttpMethod = `${Uppercase<MethodsLowerCase>}` | MethodsLowerCase;

// TODO
// eslint-disable-next-line max-len
const isHttpMethod = (method?: string): method is HttpMethod => !!method && methods.some((m) => m.toLowerCase() === method.toLowerCase());

// TODO
// eslint-disable-next-line max-len
export const methodHandler = (handlers: Partial<Record<HttpMethod, NextApiHandler>>) => (req: NextApiRequest, res: NextApiResponse) => {
  if (!isHttpMethod(req.method)) throw Boom.notFound();
  const handler = handlers[req.method];
  if (!handler) throw Boom.notFound();
  handler(req, res);
};
