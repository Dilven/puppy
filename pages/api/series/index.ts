import type { NextApiRequest, NextApiResponse } from 'next'
import { validateSearchQuery } from '../../../helpers/validation';
import { ExternalService } from '../../../services/external-api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = validateSearchQuery(req.query);
  const series = await ExternalService.searchSeries(query)
  res.status(200).json(JSON.stringify(series));
}

export default handler;