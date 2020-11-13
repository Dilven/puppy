import React, { useState } from "react"
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom"
import { getMovies } from "../api";
import { MOVIE_QUERY_KEY } from "../queries";

export const Form = () => {
  const history = useHistory();
  const [name, setName] = useState('')
  const { isLoading, refetch } = useQuery(MOVIE_QUERY_KEY, getMovies(name),  {
    refetchOnWindowFocus: false,
    enabled: false // turned off by default, manual refetch is needed
  })

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await refetch();
    history.push(`/movies/search/results?q=${name}`);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Search</button>
      {isLoading && <span>Loading...</span>}
    </form>
  )
}