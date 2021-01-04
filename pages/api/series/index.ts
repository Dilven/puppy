import type { NextApiRequest, NextApiResponse } from 'next';
import { methodHandler } from '../../../helpers/methodHandler';
import { validateSearchQuery } from '../../../helpers/validation';
import { ExternalApi } from '../../../services/external-api';

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = validateSearchQuery(req.query);
  const series = await ExternalApi.searchSeries(query);
  res.status(200).json(JSON.stringify(series));
};

export default methodHandler({ get: getHandler });
