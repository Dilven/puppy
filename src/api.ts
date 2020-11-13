import axios from 'axios';
import { Movie } from './models/movie';

export type ApiResponse<T> = {
  Search: T[]
}

const fakeMovies = (name: string | null): Promise<Movie[]> => new Promise((res) => {
  setTimeout(() => res([{ Title: name || 'xxx' }]), 4000)
})

const api = axios.create({
  baseURL: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
  timeout: 1000,
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
    "useQueryString": true
  }
});

export const getMovies = (name: string | null) => async () => {
  // const { data: { Search }} = await api.get<ApiResponse<Movie>>(`?s=${name || 'avengers'}&page=1&r=json`)
  const Search = await fakeMovies(name);
  return Search;
}