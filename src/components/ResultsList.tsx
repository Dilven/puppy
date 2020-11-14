import React from 'react';
import { Movie } from '../models/movie';

type Props = { 
  data?: Movie[],
  isLoading: boolean;
}

export const ResultsList = ({ data, isLoading }: Props) => {
  if (isLoading) {
    return <span>Loading...</span>
  }
  return (
    <div>
      {data?.map(d => <h1>{d.Title}</h1>)}
    </div>
  )
}