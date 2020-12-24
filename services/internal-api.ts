import axios from 'axios';
import { Episode } from '../models/episode';
import { Series } from '../models/series';
import { Movie } from '../models/movie';
import { ApiGetQuery, ApiSearchQuery } from '../models/api-search-params';
import { getQueryParams } from '../helpers/search-params';
import { Item } from '../models/item';

type ResourceType = Item['Type'];

const baseApiPathname = '/api/';

function get(type: 'series', params: ApiGetQuery['id']): Promise<Series>
function get(type: 'movie', params: ApiGetQuery['id']): Promise<Movie>
function get(type: 'episode', params: ApiGetQuery['id']): Promise<Episode>
async function get(type: ResourceType, id: ApiGetQuery['id']) {
  const { data } = await axios.get<Series | Movie | Episode>(`${baseApiPathname}${type}/${id}`);
  return data;
}

function search(type: 'series', params: ApiSearchQuery): Promise<Series[]>
function search(type: 'movie', params: ApiSearchQuery): Promise<Movie[]>
function search(type: 'episode', params: ApiSearchQuery): Promise<Episode[]>
async function search(type: ResourceType, params: ApiSearchQuery) {
  const queryParams = getQueryParams(params);
  const { data } = await axios.get<(Series | Movie | Episode)[]>(`${baseApiPathname}${type}?${queryParams}`);
  return data;
}

const searchMovies = (params: ApiSearchQuery) => search('movie', params);
const searchSeries = (params: ApiSearchQuery) => search('series', params);
const searchEpisodes = (params: ApiSearchQuery) => search('episode', params);

const getSeries = (id: string) => get('series', id);
const getMovie = (id: string) => get('movie', id);
const getEpisode = (id: string) => get('episode', id);

export type SearchQuery = typeof searchMovies | typeof searchSeries | typeof searchEpisodes;
export type GetQuery = typeof getMovie | typeof getSeries | typeof getEpisode;

export const InternalApi = {
  searchMovies,
  searchEpisodes,
  searchSeries,
  getSeries,
  getMovie,
  getEpisode,
};
