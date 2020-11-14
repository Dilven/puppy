import axios from 'axios';
import { Movie } from './models/movie';

export type ApiResponse<T> = {
  Search: T[]
}

type ResourceType = 'movie' | 'series' | 'episode';

type SearchParams = {
  name?: string | null;
  year?: string | null;
  plot?: string | null;
  page?: string | null;
  id?: string | null;
}

const fakeMovies = (name: string | null): Promise<Movie[]> => new Promise((res) => {
  setTimeout(() => res([{ Title: name || 'xxx' }]), 4000)
})

const apiRequest = axios.create({
  baseURL: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
  timeout: 1000,
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
    "useQueryString": true
  }
});



export const get = (type: ResourceType, { name, year, plot, id, page }: SearchParams) => async () => {
  const params = new URLSearchParams()
  params.set('r', 'json');
  
  if(type) params.set('type', type);
  if(name) params.set('q', name);
  if(year) params.set('y', `${year}`);
  if(plot) params.set('plot', plot);
  if(id) params.set('i', id);
  if(page) params.set('page', `${page}`);

  const queryParams = params.toString();

  const { data: { Search }} = await apiRequest.get<ApiResponse<Movie>>(`?${queryParams}`)
  // const Search = await fakeMovies(name);
  return Search;
}

export const getMovies = (params: SearchParams) => get('movie', params);
export const getSeries = (params: SearchParams) => get('series', params);
export const getEpisodes = (params: SearchParams) => get('episode', params);

export type Query = typeof getMovies | typeof getSeries | typeof getEpisodes; 