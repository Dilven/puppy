import type { NextApiRequest, NextApiResponse } from 'next'
import { ExternalService } from '../../../api/external-service'
import { validateGetQuery } from '../../../api/validation';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = validateGetQuery(req.query);
  const movie = await ExternalService.getMovie(id)
  res.status(200).json(JSON.stringify(movie));
}

export default handler;