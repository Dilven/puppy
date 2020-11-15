export type CollectionBasic = {
  Title: string;
  Poster: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export type CollectionPreview = {
  Actors: string;
  Awards: string;
  Country: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Rated: string;
  Ratings: {
    Source: string
    Value: string
  }[]
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating:  string;
  imdbVotes: string;
}