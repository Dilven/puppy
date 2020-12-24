import * as z from 'zod';
import axios from 'axios';
import { PreviewSchemasType, SearchSchemasType, validatePreview, validateSearch } from '../helpers/validation';
import { ResourceType } from '../models/item';
import { ApiGetQuery, ApiSearchQuery } from '../models/api-search-params';
import { EPISODE_TYPE, MOVIE_TYPE, SERIES_TYPE } from '../constants/resource-types';

const RATE_LIMIT_HEADER = 'x-ratelimit-requests-remaining'
let limitExceeded = false;
const setLimitExceeded = (remainingRequests: number) => { limitExceeded = remainingRequests < 100 };

export const paramsAliases: Record<keyof ApiSearchQuery | 'id' | 'type', string> = {
  name: 's',
  year: 'y',
  plot: 'plot',
  page: 'page',
  id: 'i',
  type: 'type'
}

const apiRequest = axios.create({
  baseURL: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
  timeout: 1000,
  headers: {
    "x-rapidapi-key": process.env.API_KEY,
    "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
    "useQueryString": true
  },
  transformResponse: [].concat(
    axios.defaults.transformResponse,
    (data: any, headers: any) => {
      setLimitExceeded(headers[RATE_LIMIT_HEADER]);
      return data;
    }),
});

const getQueryParams = ({ name, year, plot, page }: ApiSearchQuery) => {
  const params = new URLSearchParams()
  if(name) params.set(paramsAliases.name, name);
  if(year) params.set(paramsAliases.year, `${year}`);
  if(plot) params.set(paramsAliases.plot, plot);
  if(page) params.set(paramsAliases.page, `${page}`);
  return params.toString();
}


const get = async <T extends ResourceType>(type: T, id: ApiGetQuery['id']): Promise<z.infer<PreviewSchemasType[T]>> => {
  if(limitExceeded) throw new Error('xxx');
  const { data } = await apiRequest.get<unknown>(`?${paramsAliases.id}=${id}&type=${type}&r=json`)
  return validatePreview(type, data);
}

const search = async <T extends ResourceType>(type: T, params: ApiSearchQuery): Promise<z.infer<SearchSchemasType[T]>> => {
  if(limitExceeded) throw new Error('xxx');
  const queryParams = getQueryParams(params)
  const { data } = await apiRequest.get<unknown>(`?${queryParams}&${paramsAliases.type}=${type}&r=json`)
  const results = z.object({ Search: z.array(z.unknown())}).parse(data).Search
  return validateSearch(type, results)
}

const searchMovies = (params: ApiSearchQuery) => search(MOVIE_TYPE, params);
const searchSeries = (params: ApiSearchQuery) => search(SERIES_TYPE, params);
const searchEpisodes = (params: ApiSearchQuery) => search(EPISODE_TYPE, params);

const getSeries = (id: string) => get(SERIES_TYPE, id);
const getMovie = (id: string) => get(MOVIE_TYPE, id);
const getEpisode = (id: string) => get(EPISODE_TYPE, id);

export type SearchQuery = typeof searchMovies | typeof searchSeries | typeof searchEpisodes; 

export const ExternalService = {
  searchMovies,
  searchSeries,
  searchEpisodes,
  getSeries,
  getMovie,
  getEpisode
}