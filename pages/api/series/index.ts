import type { NextApiRequest, NextApiResponse } from 'next'
import { validateSearchQuery } from '../../../shared/validation';
import { ExternalService } from '../../../shared/external-service';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = validateSearchQuery(req.query);
  const series = await ExternalService.searchSeries(query)
  res.status(200).json(JSON.stringify(series));
}

export default handler;