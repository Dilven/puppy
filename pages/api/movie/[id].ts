import type { NextApiRequest, NextApiResponse } from 'next';
import { methodHandler } from '../../../helpers/methodHandler';
import { validateGetQuery } from '../../../helpers/validation';
import { ExternalApi } from '../../../services/external-api';

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = validateGetQuery({ id: req.query.id });
  const movie = await ExternalApi.getMovie(id);
  res.status(200).json(JSON.stringify(movie));
};

export default methodHandler({ get: getHandler });
