import type { NextApiRequest, NextApiResponse } from 'next';
import { validateGetQuery } from '../../../helpers/validation';
import { ExternalService } from '../../../services/external-api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = validateGetQuery({ id: req.query });
  const movie = await ExternalService.getMovie(id);
  res.status(200).json(JSON.stringify(movie));
};

export default handler;
