import type { NextApiRequest, NextApiResponse } from 'next'
import { ExternalService } from '../../../api/external-service'
import { validateGetQuery } from '../../../api/validation';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = validateGetQuery(req.query.id);
  const series = await ExternalService.getEpisode(id);
  res.status(200).json(JSON.stringify(series));
}

export default handler;