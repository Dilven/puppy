import type { NextApiRequest, NextApiResponse } from 'next'
import { MovieService } from '../../../api/external-service'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req
  const movie = await MovieService.searchMovies(query)
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(movie));
}

export default handler;