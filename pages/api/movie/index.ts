import type { NextApiRequest, NextApiResponse } from 'next';
import { validateSearchQuery } from '../../../helpers/validation';
import { ExternalService } from '../../../services/external-api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = validateSearchQuery(req.query);
  const movies = await ExternalService.searchMovies(query);
  res.status(200).json(JSON.stringify(movies));
};

export default handler;
