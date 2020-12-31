import type { NextApiRequest, NextApiResponse } from 'next';
import { validateSearchQuery } from '../../../helpers/validation';
import { ExternalApi } from '../../../services/external-api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = validateSearchQuery(req.query);
  const episodes = await ExternalApi.searchEpisodes(query);
  res.status(200).json(JSON.stringify(episodes));
};

export default handler;
