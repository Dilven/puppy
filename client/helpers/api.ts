import { Episode } from './../../shared/models/episode';
import { Series } from './../../shared/models/series';
import { Movie } from './../../shared/models/movie';
import { ApiGetQuery } from './../../shared/models/api-search-params';
import { getQueryParams } from './search-params';
import axios from 'axios';
import { Item } from '../../shared/models/item';
import { ApiSearchQuery } from '../../shared/models/api-search-params';

type ResourceType = Item['Type'];

const baseApiPathname = '/api/';

export function get(type: 'series', params: ApiGetQuery['id']): Promise<Series>
export function get(type: 'movie', params: ApiGetQuery['id']): Promise<Movie>
export function get(type: 'episode', params: ApiGetQuery['id']): Promise<Episode>
export async function get(type: ResourceType, id: ApiGetQuery['id']) {
  const { data } = await axios.get<Series | Movie | Episode>(`${baseApiPathname}${type}/${id}`);
  return data;
}

export function search(type: 'series', params: ApiSearchQuery): Promise<Series[]>
export function search(type: 'movie', params: ApiSearchQuery): Promise<Movie[]>
export function search(type: 'episode', params: ApiSearchQuery): Promise<Episode[]>
export async function search(type: ResourceType, params: ApiSearchQuery) {
  const queryParams = getQueryParams(params)
  const { data } = await axios.get<{ Search: (Series | Movie | Episode)[]}>(`${baseApiPathname}${type}?${queryParams}`);
  return data.Search;
}

export const searchMovies = (params: ApiSearchQuery) => search('movie', params);
export const searchSeries = (params: ApiSearchQuery) => search('series', params);
export const searchEpisodes = (params: ApiSearchQuery) => search('episode', params);

export const getSeries = (id: string) => get('series', id);
export const getMovie = (id: string) => get('movie', id);
export const getEpisode = (id: string) => get('episode', id);

export type SearchQuery = typeof searchMovies | typeof searchSeries | typeof searchEpisodes; 