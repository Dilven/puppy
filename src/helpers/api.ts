import * as z from 'zod';
import axios from 'axios';
import { getQueryParams } from './search-params';
import { Item } from '../models/item';
import { SearchParams } from '../models/search-params';
import { PreviewSchemasType, SearchSchemasType, validatePreview, validateSearch } from './validation';

type ResourceType = Item['Type'];

const apiRequest = axios.create({
  baseURL: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
  timeout: 1000,
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
    "useQueryString": true
  }
});

export const get = async <T extends ResourceType>(type: T, params: SearchParams): Promise<z.infer<PreviewSchemasType[T]>> => {
  const queryParams = getQueryParams(params)
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

export const getSerie = (id: string) => get('series', { id });
export const getMovie = (id: string) => get('movie', { id });
export const getEpisode = (id: string) => get('episode', { id });

export type SearchQuery = typeof searchMovies | typeof searchSeries | typeof searchEpisodes; 