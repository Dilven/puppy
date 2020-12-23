import * as z from 'zod';
import axios from 'axios';
import { getQueryParams } from '../helpers/search-params';
import { PreviewSchemasType, SearchSchemasType, validatePreview, validateSearch } from '../helpers/validation';
import { ResourceType } from '../models/item';
import { SearchParams } from '../models/search-params';

const apiRequest = axios.create({
  baseURL: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
  timeout: 1000,
  headers: {
    "x-rapidapi-key": process.env.API_KEY,
    "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
    "useQueryString": true
  }
});

const get = async <T extends ResourceType>(type: T, id: SearchParams['id']): Promise<z.infer<PreviewSchemasType[T]>> => {
  const queryParams = getQueryParams({ id })
  const { data } = await apiRequest.get<unknown>(`?${queryParams}&type=${type}&r=json`)
  return validatePreview(type, data);
}

const search = async <T extends ResourceType>(type: T, params: SearchParams): Promise<z.infer<SearchSchemasType[T]>> => {
  const queryParams = getQueryParams(params)
  const { data } = await apiRequest.get<unknown>(`?${queryParams}&type=${type}&r=json`)
  const results = z.object({ Search: z.array(z.unknown())}).parse(data).Search
  return validateSearch(type, results)
}

const searchMovies = (params: SearchParams) => search('movie', params);
const searchSeries = (params: SearchParams) => search('series', params);
const searchEpisodes = (params: SearchParams) => search('episode', params);

const getSeries = (id: string) => get('series', id);
const getMovie = (id: string) => get('movie', id);
const getEpisode = (id: string) => get('episode', id);

export type SearchQuery = typeof searchMovies | typeof searchSeries | typeof searchEpisodes; 

export const MovieService = {
  searchMovies,
  searchSeries,
  searchEpisodes,
  getSeries,
  getMovie,
  getEpisode
}