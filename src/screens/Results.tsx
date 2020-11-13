import React from 'react';
import { useQuery,  useQueryCache } from 'react-query'
import { useHistory } from 'react-router-dom';
import { getMovies } from '../api';

export const Results = () => {
  useQueryCache();
  const history = useHistory();
  const searchParams = new URLSearchParams(history.location.search);
  const name = searchParams.get('q');
  const { data: movies, isLoading } = useQuery('movies', getMovies(name))

  if (isLoading) {
    return <span>Loading...</span>
  }
  return (
    <div>
      {movies?.map(movie => <h1>{movie.Title}</h1>)}
    </div>
  )
}