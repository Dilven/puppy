import type { NextApiRequest, NextApiResponse } from 'next'
import { MovieService } from '../../../api/external-service'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query: { id } } = req
  const movie = await MovieService.getSeries(id as string)
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(movie));
}

export default handler;