import axios from 'axios';
import { SERIES_TYPE, MOVIE_TYPE, EPISODE_TYPE } from '../constants/resource-types';
import { Episode } from '../models/episode';
import { Series } from '../models/series';
import { Movie } from '../models/movie';
import { ApiGetQuery, ApiSearchQuery } from '../models/api-search-params';
import { getQueryParams } from '../helpers/search-params';
import { Item } from '../models/item';

type ResourceType = Item['Type'];

const baseApiPathname = '/api/';

function get(type: typeof SERIES_TYPE, params: ApiGetQuery['id']): Promise<Series>
function get(type: typeof MOVIE_TYPE, params: ApiGetQuery['id']): Promise<Movie>
function get(type: typeof EPISODE_TYPE, params: ApiGetQuery['id']): Promise<Episode>
async function get(type: ResourceType, id: ApiGetQuery['id']) {
  const { data } = await axios.get<Series | Movie | Episode>(`${baseApiPathname}${type}/${id}`);
  return data;
}

function search(type: typeof SERIES_TYPE, params: ApiSearchQuery): Promise<Series[]>
function search(type: typeof MOVIE_TYPE, params: ApiSearchQuery): Promise<Movie[]>
function search(type: typeof EPISODE_TYPE, params: ApiSearchQuery): Promise<Episode[]>
async function search(type: ResourceType, params: ApiSearchQuery) {
  const queryParams = getQueryParams(params);
  const { data } = await axios.get<(Series | Movie | Episode)[]>(`${baseApiPathname}${type}?${queryParams}`);
  return data;
}

const searchSeries = (params: ApiSearchQuery) => search(SERIES_TYPE, params);
const searchMovies = (params: ApiSearchQuery) => search(MOVIE_TYPE, params);
const searchEpisodes = (params: ApiSearchQuery) => search(EPISODE_TYPE, params);

const getSeries = (id: string) => get(SERIES_TYPE, id);
const getMovie = (id: string) => get(MOVIE_TYPE, id);
const getEpisode = (id: string) => get(EPISODE_TYPE, id);

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
