import { validateGetQuery } from './../../../api/validation';
import type { NextApiRequest, NextApiResponse } from 'next'
import { ExternalService } from '../../../api/external-service'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = validateGetQuery(req.query.id);
  const episode = await ExternalService.getEpisode(id)
  res.status(200).json(JSON.stringify(episode));
}

export default handler;