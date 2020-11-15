import axios from 'axios';
import { EpisodeBasic, EpisodePreview } from './models/episode';
import { MovieBasic, MoviePreview } from './models/movie';
import { SeriesBasic, SeriesPreview } from './models/series';

type ResourceType = 'movie' | 'series' | 'episode';

export type SearchParams = {
  name?: string | null;
  year?: string | null;
  plot?: string | null;
  page?: string | null;
  id?: string | null;
}

const apiRequest = axios.create({
  baseURL: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
  timeout: 1000,
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
    "useQueryString": true
  }
});

const getQueryParams = ({ name, year, plot, id, page }: SearchParams) => {
  const params = new URLSearchParams()
  params.set('r', 'json');
  if(name) params.set('s', name);
  if(year) params.set('y', `${year}`);
  params.set('plot', plot || 'long');
  if(id) params.set('i', id);
  if(page) params.set('page', `${page}`);

  return `${params.toString()}&`;
}

export const get = async <T extends MoviePreview | SeriesPreview | EpisodePreview>(type: ResourceType, params: SearchParams) => {
  const queryParams = getQueryParams(params)
  const { data } = await apiRequest.get<T>(`?${queryParams}type=${type}`)
  if(data.Response === "False") throw new Error()
  return data;
}

export const search = async <T extends MovieBasic | SeriesBasic | EpisodeBasic>(type: ResourceType, params: SearchParams) => {
  const queryParams = getQueryParams(params)
  const { data: { Search } } = await apiRequest.get<{ Search: T[] }>(`?${queryParams}type=${type}`)
  return Search;
}

export const searchMovies = (params: SearchParams) => search<MoviePreview>('movie', params);
export const searchSeries = (params: SearchParams) => search<SeriesPreview>('series', params);
export const searchEpisodes = (params: SearchParams) => search<EpisodePreview>('episode', params);

export const getSerie = (id: string) => get<SeriesPreview>('series', { id });
export const getMovie = (id: string) => get<MoviePreview>('movie', { id });
export const getEpisode = (id: string) => get<EpisodePreview>('episode', { id });

export type SearchQuery = typeof searchMovies | typeof searchSeries | typeof searchEpisodes; 