import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const Form = () => {
  const history = useHistory();
  const [name, setName] = useState('')
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push(`/movies/search/results?q=${name}`);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  )
}