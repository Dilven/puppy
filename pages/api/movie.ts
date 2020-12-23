import axios from 'axios';
import * as z from 'zod';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getQueryParams } from '../../helpers/search-params';
import { PreviewSchemasType, validatePreview, SearchSchemasType, validateSearch } from '../../helpers/validation';
import { ResourceType } from '../../models/item';
import { SearchParams } from '../../models/search-params';

const apiRequest = axios.create({
  baseURL: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
  timeout: 1000,
  headers: {
    "x-rapidapi-key": process.env.API_KEY,
    "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
    "useQueryString": true
  }
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('DEBUGGING:  ~ file: movie.ts ~ line 26 ~ handler ~ req.query', req.params);
  // const { data } = await searchMovies(params)
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ name: 'John Doe' }))
}

export const get = async <T extends ResourceType>(type: T, id: SearchParams['id']): Promise<z.infer<PreviewSchemasType[T]>> => {
  const queryParams = getQueryParams({ id })
  const { data } = await apiRequest.get<unknown>(`?${queryParams}&type=${type}&r=json`)
  return validatePreview(type, data);
}

export const search = async <T extends ResourceType>(type: T, params: SearchParams): Promise<z.infer<SearchSchemasType[T]>> => {
  const queryParams = getQueryParams(params)
  const { data } = await apiRequest.get<unknown>(`?${queryParams}&type=${type}&r=json`)
  const results = z.object({ Search: z.array(z.unknown())}).parse(data).Search
  return validateSearch(type, results)
}

export const searchMovies = (params: SearchParams) => search('movie', params);
export const searchSeries = (params: SearchParams) => search('series', params);
export const searchEpisodes = (params: SearchParams) => search('episode', params);

export const getSeries = (id: string) => get('series', id);
export const getMovie = (id: string) => get('movie', id);
export const getEpisode = (id: string) => get('episode', id);

export type SearchQuery = typeof searchMovies | typeof searchSeries | typeof searchEpisodes; 

export default handler;