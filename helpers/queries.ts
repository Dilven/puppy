import * as z from 'zod';
import { getQueryParams } from './search-params';
import { Item } from '../models/item';
import { SearchParams } from '../models/search-params';
import { PreviewSchemasType, SearchSchemasType, validatePreview, validateSearch } from './validation';
import axios from 'axios';

type ResourceType = Item['Type'];

export const get = async <T extends ResourceType>(type: T, id: SearchParams['id']): Promise<z.infer<PreviewSchemasType[T]>> => {
  const { data } = await axios.get<unknown>(`/api/${type}/${id}`);
  return validatePreview(type, data);
}

export const search = async <T extends ResourceType>(type: T, params: SearchParams): Promise<z.infer<SearchSchemasType[T]>> => {
  const queryParams = getQueryParams(params)
  const { data } = await axios.get<unknown>(`/api/${type}?${queryParams}`);
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