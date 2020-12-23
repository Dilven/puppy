import { ApiGetQuery } from './../../shared/models/api-search-params';
import * as z from 'zod';
import { getQueryParams } from './search-params';
import { PreviewSchemasType, SearchSchemasType, validatePreview, validateSearch } from '../../shared/validation';
import axios from 'axios';
import { Item } from '../../shared/models/item';
import { ApiSearchQuery } from '../../shared/models/api-search-params';

type ResourceType = Item['Type'];

const baseApiPathname = '/api/';

export const get = async <T extends ResourceType>(type: T, id: ApiGetQuery['id']): Promise<z.infer<PreviewSchemasType[T]>> => {
  const { data } = await axios.get<unknown>(`${baseApiPathname}${type}/${id}`);
  return validatePreview(type, data);
}

export const search = async <T extends ResourceType>(type: T, params: ApiSearchQuery): Promise<z.infer<SearchSchemasType[T]>> => {
  const queryParams = getQueryParams(params)
  const { data } = await axios.get<unknown>(`${baseApiPathname}${type}?${queryParams}`);
  const results = z.object({ Search: z.array(z.unknown())}).parse(data).Search
  return validateSearch(type, results)
}

export const searchMovies = (params: ApiSearchQuery) => search('movie', params);
export const searchSeries = (params: ApiSearchQuery) => search('series', params);
export const searchEpisodes = (params: ApiSearchQuery) => search('episode', params);

export const getSeries = (id: string) => get('series', id);
export const getMovie = (id: string) => get('movie', id);
export const getEpisode = (id: string) => get('episode', id);

export type SearchQuery = typeof searchMovies | typeof searchSeries | typeof searchEpisodes; 