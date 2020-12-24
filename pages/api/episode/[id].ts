import type { NextApiRequest, NextApiResponse } from 'next';
import { validateGetQuery } from '../../../helpers/validation';
import { ExternalService } from '../../../services/external-api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = validateGetQuery(req.query);
  const episode = await ExternalService.getEpisode(id);
  res.status(200).json(JSON.stringify(episode));
};

export default handler;
