import * as z from 'zod';
import axios from 'axios';
import { PreviewSchemasType, SearchSchemasType, validatePreview, validateSearch } from '../helpers/validation';
import { ResourceType } from '../models/item';
import { ApiGetQuery, ApiSearchQuery } from '../models/api-search-params';

export const paramsAliases: Record<keyof ApiSearchQuery | 'id', string> = {
  name: 's',
  year: 'y',
  plot: 'plot',
  page: 'page',
  id: 'i'
}

const apiRequest = axios.create({
  baseURL: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
  timeout: 1000,
  headers: {
    "x-rapidapi-key": process.env.API_KEY,
    "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
    "useQueryString": true
  }
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
  //TODO VALIDATION HERE INSTEAD OF VALIDATION ON ENDPOINTS?
  const { data } = await apiRequest.get<unknown>(`?${paramsAliases.id}=${id}&type=${type}&r=json`)
  return validatePreview(type, data);
}

const search = async <T extends ResourceType>(type: T, params: ApiSearchQuery): Promise<z.infer<SearchSchemasType[T]>> => {
  const queryParams = getQueryParams(params)
  const { data } = await apiRequest.get<unknown>(`?${queryParams}&type=${type}&r=json`)
  const results = z.object({ Search: z.array(z.unknown())}).parse(data).Search
  return validateSearch(type, results)
}

const searchMovies = (params: ApiSearchQuery) => search('movie', params);
const searchSeries = (params: ApiSearchQuery) => search('series', params);
const searchEpisodes = (params: ApiSearchQuery) => search('episode', params);

const getSeries = (id: string) => get('series', id);
const getMovie = (id: string) => get('movie', id);
const getEpisode = (id: string) => get('episode', id);

export type SearchQuery = typeof searchMovies | typeof searchSeries | typeof searchEpisodes; 

export const ExternalService = {
  searchMovies,
  searchSeries,
  searchEpisodes,
  getSeries,
  getMovie,
  getEpisode
}