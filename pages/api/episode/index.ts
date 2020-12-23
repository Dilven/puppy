import type { NextApiRequest, NextApiResponse } from 'next'
import { ExternalService } from '../../../api/external-service'
import { validateSearchQuery } from '../../../api/validation';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = validateSearchQuery(req.query);
  const episodes = await ExternalService.searchEpisodes(query)
  res.status(200).json(JSON.stringify(episodes));
}

export default handler;