import type { NextApiRequest, NextApiResponse } from 'next';
import { validateGetQuery } from '../../../helpers/validation';
import { ExternalApi } from '../../../services/external-api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = validateGetQuery({ id: req.query.id });
  const episode = await ExternalApi.getEpisode(id);
  res.status(200).json(JSON.stringify(episode));
};

export default handler;
