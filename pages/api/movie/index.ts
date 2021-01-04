import type { NextApiRequest, NextApiResponse } from 'next';
import { methodHandler } from '../../../helpers/method-handler';
import { validateSearchQuery } from '../../../helpers/validation';
import { ExternalApi } from '../../../services/external-api';

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = validateSearchQuery(req.query);
  const movies = await ExternalApi.searchMovies(query);
  res.status(200).json(JSON.stringify(movies));
};

export default methodHandler({ get: getHandler });
