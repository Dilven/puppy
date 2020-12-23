import type { NextApiRequest, NextApiResponse } from 'next'
import { ExternalService } from '../../../api/external-service'
import { validateSearchQuery } from '../../../api/validation';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = validateSearchQuery(req.query);
  const movies = await ExternalService.searchMovies(query)
  res.status(200).json(JSON.stringify(movies));
}

export default handler;