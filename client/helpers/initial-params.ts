import { ParsedUrlQuery } from "querystring";

export const getInitialParams = (params: ParsedUrlQuery) => {
  const id = params.id;
  if (typeof id !== 'string') {
    throw new Error('path id must be a string')
  }
  return id;
}